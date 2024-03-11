import Image from 'next/image';
import Link from 'next/link';


export interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string;
}

export default function Card({id, title, overview, poster_path }: Movie) {
    return <>
    <div className='flex flex-col justify-start mb-5'>
            <Link key={id} href={`movies/${id}`} title={title} className='mb-1'>
              <Image
                alt={title}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                width={500}
                height={500}
                className='w-full'
              />
              </Link>
              <div className='flex flex-row content-center'>
                <h2 className='py-2 font-bold flex-1'>{title}</h2>
                <Link href={`movies/${id}`} title={`${title} Details`}>Details</Link>
              </div>
                <p className='py-2 text-xs'>{overview}</p>
            </div>
    </>
}