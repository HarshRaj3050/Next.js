import Link from "next/link";

export default function About(){
    return (
        <>
            <p>
                <Link href="/">Home - link</Link>
            </p>
            <h1 className="text-4xl">More About</h1>
            <p>
                <Link href="/about/college">college - link</Link>
            </p>
        </>
    )
}