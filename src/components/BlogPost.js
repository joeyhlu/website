import React from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "./BlogPosts";
import "./BlogPost.css"; 

const BlogPost = () => {
  const { id } = useParams(); 
  const post = blogPosts.find((post) => post.id.toString() === id);

  if (!post) {
    return <h2>Blog post not found!</h2>;
  }

  return (
    <div className="blog-post">
      <Link to="/blogs" className="back-link">← Back to Blogs</Link>
      <h1 className="post-title">{post.title}</h1>
      <p className="post-meta">
        By {post.author} on {post.date}
      </p>
      <div className="post-content">{post.content}</div>
    </div>
  );
};

export default BlogPost;
