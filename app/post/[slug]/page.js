"use client";
import React from "react";
import { getPostDetails } from "@/services";
import PostDetail from "@/components/PostDetails";

import Author from "@/components/Author";

const Page = ({ params }) => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPostDetails(params.slug);
        setPost(postData);
      } catch (error) {
        console.error("Failed to fetch post details:", error);
      }
    };

    fetchPost();
  }, [params.slug]);

  if (!post) {
    return (
      <div className="bg-white flex justify-center items-center h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="bg-white h-[100%]">
      <PostDetail post={post} />
      <Author author={post.author} />
    </div>
  );
};

export default Page;
