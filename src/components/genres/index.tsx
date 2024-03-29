'use client';

import { getGenres } from '@/app/movies/api/callbacks';
import { Autocomplete, Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export interface Genres {
    id: number;
    name: string;
}

export default function Genres(params: {
    onGenresHandler: (value: number) => void;
  }) {
  const [genres, setGenres] = useState([]);
  const fetchGenres = async () => {
    const results = await getGenres();
    if (results?.length) {
      setGenres(results);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const onGenresSelect = (event: object, value: any) => {
    if(value) {
        params.onGenresHandler(value.id);
    } else {
        params.onGenresHandler(0);
    }
  }


  return (
    <Stack spacing={5} sx={{ width: 200 }}>
      <Autocomplete
        options={genres?.map((genr: Genres) => genr)}
        id='chooseGenres'
        disableCloseOnSelect
        onChange={onGenresSelect}
        getOptionLabel={(option: Genres) => option.name}
        renderInput={(params) => (
          <TextField {...params} label='Genres' variant='standard' fullWidth />
        )}
      />
    </Stack>
  );
}
