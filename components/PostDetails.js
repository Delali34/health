// Import dependencies and getPosts function
import React, { useState, useEffect } from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "../services/index";

const PostDetail = ({ post }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPosts();
        const shuffledPosts = shuffleArray(data); // Shuffle the posts array
        setPosts(shuffledPosts.slice(0, 4)); // Keep the first 5 shuffled posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchData();
  }, []);

  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const renderers = {
    a: ({ children, openInNewTab, href, ...rest }) => {
      // Check if the href starts with "http://" or "https://"
      const isExternalLink =
        href.startsWith("http://") || href.startsWith("https://");

      // If it's not an external link, prepend "http://"
      const correctedHref = isExternalLink ? href : `http://${href}`;

      return (
        <a
          href={correctedHref}
          target="_blank"
          rel={openInNewTab ? "noopener noreferrer" : ""}
          style={{ color: "blue" }}
          {...rest}
        >
          {children}
        </a>
      );
    },
    // Custom renderer for videos
    video: ({ src, title }) => (
      <video controls style={{ width: "100%" }} title={title}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    p: ({ children }) => <p className="paragraph">{children}</p>,
    // ... add other custom renderers if needed
  };

  return (
    <div>
      {/* Post content */}
      <div className="w-full h-full relative font-mont">
        <Image
          className="w-full h-[60vh] min-h-[500px] object-cover"
          src={post.featuredImage?.url}
          alt={post.title}
          width={1000}
          height={1000}
        />
      </div>
      <div className="max-w-[1280px] pt-10 mx-auto px-5 ">
        {/* Post title */}
        <h2 className="inline-block lg:text-3xl text-xl z-50 py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10 ">
          {post.title}
        </h2>
        {/* Post meta */}
        <div className="flex items-center gap-3 mt-5">
          <Image
            src={post.author?.photo?.url}
            alt={post.author?.name}
            className="align-middle rounded-full w-[40px] h-[40px]"
            width={40}
            height={40}
          />
          <p className="text-primary font-semibold text-sm">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>
      </div>
      {/* Post content */}
      <div className="max-w-[1320px] mx-auto w-full gap-10 lg:px-10 px-5 lg:flex items-center justify-between">
        <div className=" text-black lg:w-[70%]">
          <div className="flex flex-col lg:flex-row justify-between lg:gap-0 gap-5">
            <div className="w-full lg:text-[14px] text-sm">
              <RichText content={post.content.raw} renderers={renderers} />
            </div>
          </div>
        </div>
        <div className=" lg:w-[20%]">
          <h3 className="lg:text-[13px] font-bold text-[14px] mt-[40px] lg:mt-[0px]font-semibold mb-4">
            You might also like:
          </h3>
          <div className="grid grid-cols-1  gap-5">
            {posts.map(({ node: randomPost }, index) => (
              <Link key={randomPost.slug} href={`/post/${randomPost.slug}`}>
                <div
                  className="border flex items-center rounded-md overflow-hidden"
                  key={index}
                >
                  <Image
                    src={randomPost.featuredImage?.url}
                    alt={randomPost.title}
                    width={200}
                    height={100}
                    className="w-[70px] h-[50px] object-cover"
                  />
                  <div className="p-3">
                    <h4 className="text-[10px] font-semibold mb-2">
                      {randomPost.title}
                    </h4>
                    <p className="text-[10px]">
                      {moment(randomPost.createdAt).format("MMM DD, YYYY")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Random post suggestions */}
    </div>
  );
};

export default PostDetail;
