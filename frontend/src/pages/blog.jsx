import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import api from "../services/api";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const response = await api.get("/blogs/");
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    loadBlogs();
  }, []);

  return (
    <div>
      <Navbar />

      <section className="page-section">
        <h1>Blog</h1>
        <p>Read AI learning articles, updates, and workshop announcements.</p>

        {blogs.length === 0 ? (
          <p>No blog posts available yet.</p>
        ) : (
          <div className="cards-grid">
            {blogs.map((blog) => (
              <div className="info-card" key={blog.id}>
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <p>
                  <strong>Author:</strong> {blog.author}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Blog;