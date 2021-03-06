/* eslint-disable no-console */
/* eslint-disable quotes */
import Head from "next/head";
import { FeaturedPosts } from "../sections/index";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

/* const posts = [
  { title: "React Testing", excerpt: "Learn React Testing" },
  { title: "React With Tailwind CSS", excerpt: "Learn React With Tailwind" },
]; */

export default function Home({ posts }) {
  // console.log(posts);
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>GraphCMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
