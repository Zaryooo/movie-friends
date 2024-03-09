import Link from 'next/link';

export default function Navigation() {
    return (<>
        <Link href="/" title="Home page">Home</Link>
        <Link href="/popular" title="Popular page">Popular</Link>
        <Link href="/upcoming" title="Upcoming page">Upcoming</Link>
    </>)
}