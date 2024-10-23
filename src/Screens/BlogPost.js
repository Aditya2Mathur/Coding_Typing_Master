import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${slug}`)
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error('Error fetching blog:', error));
  }, [slug]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <img src={`http://localhost:5000/${blog.frontImage}`} alt={blog.title} />
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPost;
