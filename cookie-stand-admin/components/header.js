import Link from 'next/link'

export default function CookieStandHeader() {
    return (
        <header>
            <Link className='text-center' href='/overview'><button className="float-right m-3 pl-2 pr-2 text-center text-base bg-gray-100 ">Overview</button></Link>
            <h1 className= 'text-3xl h-17 py-2  px-8 bg-green-500 text-black'>Cookie Stand Admin</h1>
        </header>
    )
    
}