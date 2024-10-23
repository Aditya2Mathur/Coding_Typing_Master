import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogNavbar from "../Components/BlogNabvar";
import BlogHeroSection from "../Components/blogSection/BlogHeroSection";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched blogs:", data); // Log the fetched data
        setBlogs(data);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div>
      <div>
        <BlogNavbar />
      </div>
      <div className="flex justify-evenly mb-20 lg:w-[100%] sm:w-full rounded-md">
        <BlogHeroSection />
      </div>
      <div>
      <h1>Latest Blogs</h1>
      <div className='grid grid-rows-4 grid-flow-col gap-4'>
      {blogs.map((blog) => (
        <div key={blog.slug}>
          <img src={`http://localhost:5000/${blog.frontImage}`} alt={blog.title} />
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <Link to={`/blog/${blog.slug}`}>Read More</Link>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
};

export default Blog;
