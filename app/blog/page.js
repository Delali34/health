"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { getPosts } from "@/services/index";
import Blogbanner from "@/components/Blogbanner";
import PostCard from "@/components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getPosts();
      setPosts(data);
    }

    fetchData();
  }, []);

  return (
    <div className=" bg4 h-[100%] pb-10 w-full">
      <div>
        {posts[0] && <Blogbanner post={posts[0].node} />}
        {/* <Categories /> */}
        <div className="max-w-[1800px] mx-auto lg:px-20 px-5 mb-8">
          <div className="lg:mt-20 mt-10">
            <div>
              <h1 className="lg:text-3xl text-xl mb-5 lg:font-bold font-medium text-black">
                Recent Posts
              </h1>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-2 2lg:grid-cols-3 gap-10">
              {posts.map((post, index) => (
                <div key={index} className="flex ">
                  <PostCard post={post.node} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { BiArrowBack } from "react-icons/bi";
// import Link from "next/link";
// import { auth } from "@/firebase";
// import { useRouter } from "next/navigation";

// function Page() {
//   const [isUserAuthenticated, setUserAuthenticated] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUserAuthenticated(true);
//       } else {
//         setUserAuthenticated(false);
//         router.push("/LogIn"); // Adjust the route to your login page
//       }
//     });
//   }, [router]);

//   // If authentication status is null, return null to prevent flash of content
//   if (isUserAuthenticated === null) return null;
//   return (
//     <div className="bg-primary h-[100vh]">
//       <div className="container mx-auto px-5  pt-20 flex items-center justify-between">
//         <div className="text-2xl text-black flex gap-1 font-bold items-center">
//           <Link
//             href="/"
//             onClick={(e) => {
//               e.preventDefault();
//               window.history.back();
//             }}
//           >
//             <BiArrowBack />
//           </Link>
//           <Link href="/">
//             <h2 className="md:text-2xl text-sm">Go back</h2>
//           </Link>
//         </div>

//         <div>
//           <h1>Blog</h1>
//         </div>
//       </div>
//       <div className=" mt-20 flex flex-col items-center justify-center">
//         <div className="">
//           <Image
//             src="/mesh.png"
//             width={600}
//             height={600}
//             alt="the bro code gh"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Page;
