"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import posts from "./posts";
import Dropdown from "@/components/dropdown/blogdopdown";
import Pagination from "@/components/blog-pagination/pagination";
import "./blogss.css";

export default function Blogs() {
  const dropdownItems = [
    { id: 1, label: "New", href: "#" },
    { id: 2, label: "Featured", href: "#" },
    { id: 3, label: "Earnings", href: "#" },
    { id: 4, label: "Sign out", href: "#" },
  ];
  const router = useRouter();

  // const handleReadMore = (href) => {
  //   router.push(href);
  // };

  return (
    <div className="bg-white">
      <div class="blogs">
        <div class="blog-container">
          <img
            class="blog-banner"
            src="/images/blogs/blogimg.jpg"
            alt="Blog Banner"
          />
          <div class="blog-content">
            <h1 class="font-bold text-red-300 lg:text-5xl md:text-4xl">
              Blog
            </h1>
            <h2 class="text-red-300 text-justify mt-3 lg-font-medium text-xl font-bold">
              Piumi Skin New Cosmetics
            </h2>
          </div>
        </div>
      </div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div>
            <Dropdown items={dropdownItems} />
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between bg-slate-50 rounded-lg p-6"
              >
                <div className="group relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="mt-3 w-full h-auto rounded-lg shadow-md"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {/* <Link href={`/blogs/${post.id}`}>
                      <a>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </Link> */}
                    <Link href={`/blogs/${post.id}`}>
                      <div className="relative cursor-pointer">
                        <span className="absolute inset-0" />
                        <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          {post.title}
                        </h3>
                      </div>
                    </Link>
                  </h3>
                  <div className="mt-3">
                    <time dateTime={post.datetime} className="text-red-300">
                      {post.date}
                    </time>
                  </div>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                  <div className="mt-3">
                    {/* Use Link component to navigate to individual blog post */}
                    <Link href={`/blogs/${post.id}`}>
                      <span
                        className="text-red-300 hover:underline cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          router.push(`/blogs/${post.id}`); // Navigate programmatically
                        }}
                      >
                        Read more
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
