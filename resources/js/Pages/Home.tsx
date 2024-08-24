import Layout from "../Layouts/Layout";

function Home({ name }){
  return(
    <>
      <h1 className="title">Dit werk!</h1>
    </>
  );
}

Home.layout = page => <Layout children={page} />

export default Home;
