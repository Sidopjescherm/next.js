import Image from 'next/image'
import Link from 'next/link'
 
export default function Page() {
  return (
    <>
      <Image src="/globe.svg" alt="Globe" width={100} height={100} />
      <h1>Hello, Next.js!</h1>
      <p>Welcome to my Next.js app!</p>
      <Link href="/blog">Go to Blog</Link>
      <Link href="https://programma.fdnd.nl/workflow-tooling-frameworks/choices-choices">FDND</Link>
    </>
  );
}