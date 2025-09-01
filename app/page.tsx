import { supabase } from "../lib/supabase";

export default async function HomePage() {
  const { data: posts, error } = await supabase.from("posts").select("*");

  if (error) {
    return <main className="p-8">Error: {error.message}</main>;
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Blog Posts</h1>
      {posts && posts.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {posts.map((post: any) => (
            <li key={post.id} className="p-4 border rounded">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{post.content}</p>
              <span className="text-gray-500 text-sm">
                {new Date(post.created_at).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-gray-600">No posts yet.</p>
      )}
    </main>
  );
}
