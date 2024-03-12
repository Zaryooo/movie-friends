import Image from 'next/image';
import Link from 'next/link';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

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
              <div className='flex flex-row'>
                <h2 className='py-2 font-bold flex-1 text-xl'>{title}</h2>
                <Link href={`movies/${id}`} title={`${title} Details`} className='p-2'><InfoOutlinedIcon sx={{ color: '#1976d2' }}/></Link>
              </div>
                <p className='py-2 text-sm'>{overview.split(" ", 15).join(" ").concat("... ")}<Link href={`movies/${id}`} title={`${title} Details`} style={{color: '#1976d2'}}>more</Link></p>
            </div>
    </>
}