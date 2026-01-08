import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import '../styles/Blogs.css';

const blogPosts = [
  { id: 1, title: 'My First Blog Post', content: 'This is the full content of my first blog post...', date: '2024-01-15' },
  { id: 2, title: 'Learning React', content: 'React is an amazing library for building user interfaces...', date: '2024-02-20' },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <PageLayout>
        <p>Post not found</p>
        <Link to="/blogs" className="back-link">← Back to all posts</Link>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <article className="blog-post">
        <Link to="/blogs" className="back-link">← Back to all posts</Link>
        <span className="blog-date">{post.date}</span>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </PageLayout>
  );
};

export default BlogPost;
