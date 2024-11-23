import React from "react";
import blogPosts from "./BlogPosts"; 
import { Link } from "react-router-dom";
import "./BlogList.css"; 

const BlogList = () => {
  return (
    <div className="sky">
        <div className="blog-list">
        <h1 className="blog-title">Blogs</h1>
        <div className="blog-grid">
            {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
                <h2>{post.title}</h2>
                <p className="blog-meta">
                By {post.author} on {post.date}
                </p>
                <p className="blog-excerpt">{post.content.slice(0, 100)}...</p>
                <Link to={`/post/${post.id}`} className="read-more">
                Read More
                </Link>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default BlogList;
