import React, { useEffect, useState } from "react";
import "../components.css";

function BlogHeroSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched blogs:", data); // Log the fetched data
        // Sort blogs by date in descending order
        const sortedBlogs = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogs(sortedBlogs);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="cards gap-20 pt-20">
      <div className="card content">
        {/* latest Blog Card */}
        <div className="card-content">
          <div className="card-img">
            <img
              src={blogs[0]?.frontImage}
              alt={blogs[0]?.title }
            />
          </div>
          <div className="card-label">{blogs[0]?.tags?.[0]}</div>
          <div className="card-title">
            {blogs[0]?.title || "Fnatic raises $19 million, shakes up leadership team"}
          </div>
        </div>
      </div>

      {/* Dynamically generated blog cards */}
      {blogs.slice(0, 2).map((blog, index) => (
                <div key={index} className="card content">
                    <div className="card-content">
                        <div className="card-img">
                            <img
                                src={blog.frontImage}
                                alt={blog.title}
                            />
                        </div>
                        <div className="card-label">{blog.tags?.[0]}</div>
                        <div className="card-title">{blog.title}</div>
                    </div>
                </div>
            ))}
      <div className="card form">
        <div className="form-title">Google ads</div>
      </div>
    </div>
  );
}

export default BlogHeroSection;
