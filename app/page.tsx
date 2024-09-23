import Link from "next/link";

export default function Home() {
  return (
    <div className='bg-gray-800 p-4'>
      <div className='text-green-400 flex justify-between items-center'>
      <h1 className='text-x1 m-2 cursor-pointer'></h1>
    <ul className="flex gap-4 mr-5 cursor-pointer" >
      <li className='hover:text-white'> <Link href="/">Home</Link></li>
      <li className='hover:text-white'> <Link href="/about">About</Link></li>
      <li className='hover:text-white'> <Link href="/services">Services</Link></li>
      <li className='hover:text-white'> <Link href="/contact-us">Contact</Link></li>
    </ul>
    </div>
    </div>
  );
}