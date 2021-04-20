import Layout from "../components/Layout";
import { getAllPostsData } from "../lib/post";
import Post from "../components/Post";

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <ul className="m-10">
        {posts && posts.map((post) => <Post key={post.key} post={post} />)}
      </ul>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
