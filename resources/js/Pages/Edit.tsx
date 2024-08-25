import { Head, useForm, Link } from "@inertiajs/react";

export default function Create({ post }){
    const { data, setData, put, errors, processing } = useForm({
      title: post.title,
      body: post.body,
    })

    function submit(e){
      e.preventDefault();
      put(`/posts/${post.id}`);
    }

    return (
      <>
        <h1 className="title">Update Post</h1>

        <div className="w-1/2 mx-auto">
          <form onSubmit={submit}>

            <label>title</label>
            <textarea
              rows="1"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
              className={errors.title && '!ring-red-500'}
            ></textarea>

            {errors.title && <p className="error">{errors.title}</p>}

            <label>paragraph</label>
            <textarea
              rows="10"
              value={data.body}
              onChange={(e) => setData('body', e.target.value)}
              className={errors.body && '!ring-red-500'}
            ></textarea>

            {errors.body && <p className="error">{errors.body}</p>}

            <button
              className="primary-btn mt-4"
              disabled={processing}
            >Update Post
            </button>

          </form>
        </div>
        <div>

        </div>
      </>
    )
}
