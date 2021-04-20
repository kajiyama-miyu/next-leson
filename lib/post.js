import fetch from "node-fetch";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

//Idの一覧を取得する関数
//getStaticPathsではフィールドの名前にparamsをつける必要がある
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

//idに応じたデータを取得する関数
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await res.json();

  return {
    post,
  };
}
