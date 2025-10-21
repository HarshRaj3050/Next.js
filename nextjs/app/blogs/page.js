import Link from "next/link";

export default function Blogs() {
  return (
    <div>
      <h1>This is Blog page</h1>
      <p>
        <Link href="/blogs/blog1">Blog 1</Link>
      </p>
      <p>
        <Link href="/blogs/blog2">Blog 2</Link>
      </p>
      <p>
        <Link href="/blogs/blog3">Blog 3</Link>
      </p>
    </div>
  );
}
