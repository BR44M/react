import { Link } from "@inertiajs/react";

export default function Home({ name }){
  return(
    <>
      <h1 className="title">Dit werk!</h1>
      <Link preserveScroll href="/home" className="block title mt-[1000px]">
      {new Date().toLocaleTimeString()}</Link>
    </>
  );
}
