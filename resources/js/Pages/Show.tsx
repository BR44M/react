import { useForm } from "@inertiajs/react";

export default function Show({post}){

  const { delete: destroy } = useForm();

  function submit(e){
    e.preventDefault()
    destroy(`/posts/${post.id}`)
  }

  return(
    <>
      <h1 className="title">{post.title}</h1>
      <p className="font-medium">{post.body}</p>
      <span className="text-sm text-slate-600">Posts on: {new Date(post.created_at).toLocaleTimeString()}</span>

      <div className="flex items-center justify-end gap-2">
        <form onSubmit={submit}>
          <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">Delete</button>
        </form>
      </div>
    </>
  )
}
