"use client";
import React from "react";
import { useRouter } from "next/router";
import Pagination from "../../components/blog-pagination/pagination";
import Dropdown from "@/components/dropdown/blogdopdown";
import Link from "next/link";
import "./blog.css";
const dropdownItems = [
  { id: 1, label: "New", href: "#" },
  { id: 2, label: "Featured", href: "#" },
  { id: 3, label: "Earnings", href: "#" },
  { id: 4, label: "Sign out", href: "#" },
];
const posts = [
  {
    id: 1,
    title: "WorkValley HQ : The solutions of minimalism work office",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "By Admin on Nov 23th, 2020 | 1 day ago",
    datetime: "2024-03-04",
    imageUrl: "/images/blogs/blogimg1.png", // Sample image URL
  },
  {
    id: 2,
    title: "WorkValley HQ : The solutions of minimalism work office",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "By Admin on Nov 23th, 2020 | 1 day ago",
    datetime: "2024-03-04",
    imageUrl: "/images/blogs/blogimg2.png", // Sample image URL
  },
  {
    id: 3,
    title: "WorkValley HQ : The solutions of minimalism work office",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "By Admin on Nov 23th, 2020 | 1 day ago",
    datetime: "2024-03-04",
    imageUrl: "/images/blogs/blogimg3.png", // Sample image URL
  },
  {
    id: 4,
    title: "WorkValley HQ : The solutions of minimalism work office",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "By Admin on Nov 23th, 2020 | 1 day ago",
    datetime: "2024-03-04",
    imageUrl: "/images/blogs/blogimg4.png", // Sample image URL
  },
  {
    id: 5,
    title: "WorkValley HQ : The solutions of minimalism work office",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "By Admin on Nov 23th, 2020 | 1 day ago",
    datetime: "2024-03-04",
    imageUrl: "/images/blogs/blogimg5.png", // Sample image URL
  },
  {
    id: 6,
    title: "WorkValley HQ : The solutions of minimalism work office",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "By Admin on Nov 23th, 2020 | 1 day ago",
    datetime: "2024-03-04",
    imageUrl: "/images/blogs/blogimg6.png", // Sample image URL
  },
  // More posts...
];

export default function Blogs() {
    // const router = useRouter();

    const handleReadMore = (href) => {
      router.push(href);
    };

  return (
    <div className="bg-white">
      <div className="blog-banner mt-3">
        <img
          className="blog-banner mx-auto max-w-10xl"
          src="/images/blogs/blogimg0.png"
          alt="home banner"
        />
      </div>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Piumis Blogs
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div> */}
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
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
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
                    {/* <a href={post.href} className="text-red-300 hover:underline">
                    Read more
                  </a> */}
                    {/* <Link href={`/viewblog/${post.id}`} key={post.id}>
                      <div className="text-red-300 hover:underline cursor-pointer">
                        Read more
                      </div>
                    </Link> */}
                    <Link href={`/blogs/${post.id}`}>
                      <span className="text-red-300 hover:underline cursor-pointer">
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
