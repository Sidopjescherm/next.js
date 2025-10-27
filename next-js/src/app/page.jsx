import Image from 'next/image'
 
export default function Page() {
  return (
    <>
      <Image src="/globe.svg" alt="Globe" width={100} height={100} />
      <h1>Hello, Next.js!</h1>
    </>
  );
}