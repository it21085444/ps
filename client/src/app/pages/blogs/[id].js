import { useRouter } from "next/router"; // Import from next/router instead of next/navigation
import posts from "./posts"; // Adjust the import path relative to the current file location

export default function BlogPost() {
  const router = useRouter();
  const { id } = router?.query || {};
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <img
        src={post.imageUrl}
        alt={post.title}
        className="mt-3 w-full h-auto rounded-lg shadow-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <p>{post.description}</p>
      <time dateTime={post.datetime} className="text-red-300">
        {post.date}
      </time>
      {/* Add more details as needed */}
    </div>
  );
}
