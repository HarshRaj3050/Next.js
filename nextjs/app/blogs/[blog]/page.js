// dynamic routing --- [blog] also know as 'slag'

async function Blog({ params }) {
  const { blog } = await params;
  return <div>blog id - {blog}</div>;
}

export default Blog;
