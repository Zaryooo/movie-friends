import Link from 'next/link';

export default function Navigation() {
    return (<>
    <div className='flex space-x-14 flex-1 content-center leading-9'>
        <Link href="/movies" title="Home page">Home</Link>
        <Link href="/popular" title="Popular page">Popular</Link>
        <Link href="/upcoming" title="Upcoming page">Upcoming</Link>
        </div>
    </>)
}