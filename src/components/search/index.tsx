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
  onKeywordHandler: (event: string) => void;
  onGenresHandler: (number: number) => void;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { ref, inView } = useInView({ threshold: 1 });

  const debouncedSearch = debounce((value: string) => {
    params.onKeywordHandler(value)
  }, 1000);

  const handleInputChange = (value:string) => {
    debouncedSearch(value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div ref={ref} className='min-h-[68px]'>
        <div
          className={`search-section w-full ${
            inView ? 'search-static' : 'search-fixed'
          }`}
        >
          <div className='pb-5'>
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
              <div className='flex min-w-[150px]'>{!inView && <ScrollToTop />}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
