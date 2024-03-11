import Breadcrumb from '@/components/breadcrumb';
import Link from 'next/link';

export default function NotFound() {
    return (
        <Breadcrumb title="This page was not found"><Link href="/" title="Go to home page">Go to Movies</Link></Breadcrumb>
        );
}