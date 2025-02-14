"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getPosts } from "@/services/index";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        console.log("Fetched posts:", fetchedPosts); // Debug log
        const processedPosts = fetchedPosts?.edges || fetchedPosts || [];
        setPosts(processedPosts.slice(0, 6));
      } catch (err) {
        console.error("Error fetching posts:", err); // Debug log
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Debug log for rendered posts
  useEffect(() => {
    console.log("Current posts state:", posts);
  }, [posts]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error loading posts: {error}
      </div>
    );
  }

  return (
    <section className="relative font-mont min-h-screen bg-white overflow-hidden">
      {/* Background and other elements remain the same */}
      <div className="absolute opacity-15 inset-0 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#172554_70%,transparent_110%)]" />

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-indigo-400/20 rounded-full blur-xl animate-pulse delay-700" />
        </div>

        {/* Header section remains the same */}
        <div className="relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl font-bold mb-6 bg-gradient-to-r from-black via-blue-900 to-black bg-clip-text text-transparent"
            >
              Latest Updates
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-black"
            >
              Get insights from our latest articles
            </motion.p>
            <div className="h-1 w-20 bg-blue-900 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {posts.map((post, index) => {
              const postData = post.node || post;
              // Debug log for individual post data
              console.log("Processing post:", postData);

              // Check if we have a valid slug
              const slug = postData?.slug || "";
              if (!slug) {
                console.warn("Missing slug for post:", postData);
              }

              const postUrl = `/post/${slug}`;
              console.log("Generated URL:", postUrl); // Debug log

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative bg-[#172554] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500"
                >
                  {/* Debug element to show URL */}
                  <div className="hidden">{postUrl}</div>

                  <Link
                    href={postUrl}
                    className="block cursor-pointer"
                    onClick={(e) => {
                      console.log("Link clicked:", postUrl); // Debug log
                    }}
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={postData.featuredImage?.url || "/placeholder.jpg"}
                        alt={postData.title || "Blog post"}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#172554]/90" />
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="text-blue-400 text-sm">
                        #{postData.categories?.[0]?.name || "Uncategorized"}
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {postData.title || "Untitled Post"}
                      </h3>
                      <p className="text-gray-300 leading-relaxed line-clamp-3">
                        {postData.excerpt || "No excerpt available"}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#172554] text-white rounded-full hover:bg-blue-900 transition-colors duration-300"
            >
              <span>View All Articles</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>

          {/* View All Link section remains the same */}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
