import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to home page</h1>
      <p>
        <Link href="/about">about - link</Link>
      </p>
      <p>
        <Link href="/blogs">blogs - link</Link>
      </p>
    </>
  );
}
