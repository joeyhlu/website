import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import '../styles/Blogs.css';

const blogPosts = [
  { id: 1, title: 'My First Blog Post', excerpt: 'This is my first blog post...', date: '2024-01-15' },
  { id: 2, title: 'Learning React', excerpt: 'React is amazing...', date: '2024-02-20' },
];

const Blogs = () => {
  return (
    <PageLayout title="Writing">
      <div className="blog-list">
        {blogPosts.map(post => (
          <Link key={post.id} to={`/post/${post.id}`} className="blog-card">
            <span className="blog-date">{post.date}</span>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};

export default Blogs;
