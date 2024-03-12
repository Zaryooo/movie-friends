'use client';

import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Stack, TextField } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import ScrollToTop from '../scrollToTop';

export default function Search(params: {
  onChangeValue: (event: string) => void;
}) {
  const { ref, inView } = useInView({ threshold: 1 });
  console.log('inView', inView);

  return (
    <>
      <div ref={ref} className='min-h-[88px]'>
        <div className={`search-section w-full ${inView ? 'search-static' : 'search-fixed'}`}>
          <div className='container mx-auto px-5 pb-5 pt-2'>
            <div className='flex'>
              <div className='flex items-end mr-5'>
                <Stack spacing={5} sx={{ width: 200 }}>
                  <Autocomplete
                    options={['The Godfather', 'Pulp Fiction']}
                    id='chooseGenres'
                    disableCloseOnSelect
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label='Genres'
                        variant='standard'
                        fullWidth
                      />
                    )}
                  />
                </Stack>
              </div>
              <div className='flex items-end min-w-[300px]'>
                <SearchIcon sx={{ color: '#fff', mr: 1, my: 0.5 }} />
                <TextField
                  id='search'
                  label='Search'
                  variant='standard'
                  fullWidth
                  onChange={(event) => params.onChangeValue(event.target.value)}
                />
              </div>
            </div>
            {!inView && <ScrollToTop/>}
          </div>
        </div>
      </div>
    </>
  );
}
