import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Home({ posts }){

  const{ flash } = usePage().props

  const [flashMsg, setFlashMsg] = useState(flash.message);

  setTimeout(() => {
    setFlashMsg(null);
  }, 2000);

  return(
    <>
      <h1 className="title">List posts</h1>

      { flashMsg && <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">{flashMsg}</div> }

      <div >
        {posts.data.map(post => (
            <div key={post.id} id={post.id} className="p-4 border-b">
              <h3 className="title">{post.title}</h3>
              <span className="text-sm text-slate-600">Posts on: {new Date(post.created_at).toLocaleTimeString()}</span>
              <p className="font-medium">{post.body}</p>
              <Link href={`/posts/${post.id}`} className="text-link">Read more...</Link>
            </div>
        ))}
      </div>
      <div className="py-12 px-4">
        {posts.links.map(link => (
          link.url ?
          <Link
            key={link.label}
            href={link.url}
            dangerouslySetInnerHTML={{ __html:link.label }}
            className={`p-1 mx-1 ${
              link.active ? "text-blue-500 font-bold" :""
            }`}
          />
          :
          <span
            key={link.label}
            dangerouslySetInnerHTML={{ __html:link.label }}
            className="p-1 mx-1 text-slate-300"
          ></span>
        ))}
      </div>
    </>
  );
}
