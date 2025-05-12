import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getposts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6  p-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">
          welcome to my website
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          this is a website for my portfolio and blog posts{" "}
        </p>
        <Link
          to="search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline "
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction></CallToAction>
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 ? (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div>
              <div className="flex flex-wrap gap-4 justify-center">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post}></PostCard>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <Link
                  to="search"
                  className="text-teal-500 text-lg hover:underline font-bold"
                >
                  View all posts
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <p>No posts found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
