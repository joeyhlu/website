import React, { useState, useEffect, useCallback, useRef } from 'react';
import './BracketGame.css';

const BracketGame = ({ onClose }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('bracketGameHighScore') || '0');
  });
  const [bracketY, setBracketY] = useState(200);
  const [velocity, setVelocity] = useState(0);
  const [pipes, setPipes] = useState([]);
  const gameRef = useRef(null);
  const frameRef = useRef(null);

  const GRAVITY = 0.5;
  const JUMP = -8;
  const PIPE_WIDTH = 60;
  const PIPE_GAP = 150;
  const PIPE_SPEED = 3;
  const GAME_HEIGHT = 400;
  const GAME_WIDTH = 400;
  const BRACKET_SIZE = 30;

  const jump = useCallback(() => {
    const jumpVelocity = -8;
    if (!gameStarted) {
      setGameStarted(true);
      setGameOver(false);
      setScore(0);
      setBracketY(200);
      setVelocity(jumpVelocity);
      setPipes([{ x: GAME_WIDTH, gapY: 150 + Math.random() * 100 }]);
    } else if (!gameOver) {
      setVelocity(jumpVelocity);
    } else {
      // Restart
      setGameStarted(true);
      setGameOver(false);
      setScore(0);
      setBracketY(200);
      setVelocity(jumpVelocity);
      setPipes([{ x: GAME_WIDTH, gapY: 150 + Math.random() * 100 }]);
    }
  }, [gameStarted, gameOver, GAME_WIDTH]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        jump();
      }
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [jump, onClose]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = () => {
      setBracketY(y => {
        const newY = y + velocity;
        if (newY < 0 || newY > GAME_HEIGHT - BRACKET_SIZE) {
          setGameOver(true);
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem('bracketGameHighScore', score.toString());
          }
          return y;
        }
        return newY;
      });

      setVelocity(v => v + GRAVITY);

      setPipes(currentPipes => {
        let newPipes = currentPipes.map(pipe => ({ ...pipe, x: pipe.x - PIPE_SPEED }));
        
        // Check collision
        newPipes.forEach(pipe => {
          const bracketLeft = 50;
          const bracketRight = 50 + BRACKET_SIZE;
          const pipeLeft = pipe.x;
          const pipeRight = pipe.x + PIPE_WIDTH;

          if (bracketRight > pipeLeft && bracketLeft < pipeRight) {
            const bracketTop = bracketY;
            const bracketBottom = bracketY + BRACKET_SIZE;
            const gapTop = pipe.gapY;
            const gapBottom = pipe.gapY + PIPE_GAP;

            if (bracketTop < gapTop || bracketBottom > gapBottom) {
              setGameOver(true);
              if (score > highScore) {
                setHighScore(score);
                localStorage.setItem('bracketGameHighScore', score.toString());
              }
            }
          }
        });

        // Score when passing pipe
        newPipes.forEach(pipe => {
          if (pipe.x + PIPE_WIDTH < 50 && !pipe.scored) {
            pipe.scored = true;
            setScore(s => s + 1);
          }
        });

        // Remove off-screen pipes and add new ones
        newPipes = newPipes.filter(pipe => pipe.x > -PIPE_WIDTH);
        
        if (newPipes.length === 0 || newPipes[newPipes.length - 1].x < GAME_WIDTH - 200) {
          newPipes.push({ x: GAME_WIDTH, gapY: 50 + Math.random() * (GAME_HEIGHT - PIPE_GAP - 100) });
        }

        return newPipes;
      });

      frameRef.current = requestAnimationFrame(gameLoop);
    };

    frameRef.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(frameRef.current);
  }, [gameStarted, gameOver, velocity, bracketY, score, highScore]);

  return (
    <div className="game-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="game-container">
        <button className="game-close" onClick={onClose}>×</button>
        <div className="game-header">
          <span className="game-title">Flappy {'{ }'}</span>
          <span className="game-score">Score: {score} | Best: {highScore}</span>
        </div>
        <div 
          className="game-area" 
          ref={gameRef}
          onClick={jump}
          style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
        >
          {/* Bracket player */}
          <div 
            className="bracket-player"
            style={{ 
              top: bracketY,
              transform: `rotate(${velocity * 3}deg)`
            }}
          >
            {'{ }'}
          </div>

          {/* Pipes */}
          {pipes.map((pipe, i) => (
            <React.Fragment key={i}>
              <div 
                className="pipe pipe-top"
                style={{ 
                  left: pipe.x, 
                  height: pipe.gapY,
                  width: PIPE_WIDTH
                }}
              >
                <span className="pipe-text">{'<'}</span>
              </div>
              <div 
                className="pipe pipe-bottom"
                style={{ 
                  left: pipe.x, 
                  top: pipe.gapY + PIPE_GAP,
                  height: GAME_HEIGHT - pipe.gapY - PIPE_GAP,
                  width: PIPE_WIDTH
                }}
              >
                <span className="pipe-text">{'>'}</span>
              </div>
            </React.Fragment>
          ))}

          {/* Start/Game Over screen */}
          {!gameStarted && (
            <div className="game-message">
              <p>Click or press Space to start</p>
              <p className="game-hint">Navigate { } through the {'<>'} pipes!</p>
            </div>
          )}
          {gameOver && (
            <div className="game-message game-over">
              <p>Game Over!</p>
              <p className="final-score">Score: {score}</p>
              <p className="game-hint">Click or press Space to retry</p>
            </div>
          )}
        </div>
        <p className="game-instructions">Space/Click to jump • Esc to close</p>
      </div>
    </div>
  );
};

export default BracketGame;

