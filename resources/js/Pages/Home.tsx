import { Link } from "@inertiajs/react";

export default function Home({ posts }){
  console.log(posts);
  return(
    <>
      <h1 className="title">List posts</h1>
      <div>
        {posts.map(post => (
            <li id={post.id} className="p-4 border-b">
              <h3 className="title">{post.title}</h3>
              <span className="text-sm text-slate-600">Posts on: {new Date(post.created_at).toLocaleTimeString()}</span>
              <p className="font-medium">{post.body}</p>
            </li>
        ))}
      </div>
    </>
  );
}
