import Link from 'next/link'

{/* This is a reusable navigation link component designed for a Next.js application. 
    It leverages the `Link` component from Next.js for client-side navigation.*/}

const NavLink = ({ href, title }) => {
    return (
   <Link 
   href={href} 
   className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
    {title}
   </Link>
    )
}

export default NavLink