'use client';

import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import ScrollToTop from '../scrollToTop';
import Genres from '../genres';
import { debounce } from 'lodash';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Search(params: {
  onGenresHandler: (number: number) => void;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { ref, inView } = useInView({ threshold: 1 });

  const debouncedSearch = debounce((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  const handleInputChange = (value:string) => {
    debouncedSearch(value);
    
  };

  return (
    <>
      <div ref={ref} className='min-h-[68px]'>
        <div
          className={`search-section w-full ${
            inView ? 'search-static' : 'search-fixed'
          }`}
        >
          <div className='container mx-auto px-5 pb-5 pt-3'>
            <div className='flex justify-between items-end'>
              <div className='flex'>
                <div className='flex items-end mr-5'>
                  <Genres onGenresHandler={params.onGenresHandler}/>
                </div>
                <div className='flex items-end min-w-[300px]'>
                  <SearchIcon sx={{ color: '#fff', mr: 1, my: 0.5 }} />
                  <TextField
                    id='search'
                    label='Search'
                    variant='standard'
                    fullWidth
                    defaultValue={searchParams.get("query"?.toString()) || ''}
                    onChange={(event) =>
                      handleInputChange(event.target.value)
                    }
                  />
                </div>
              </div>
              <div className='flex'>{!inView && <ScrollToTop />}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
