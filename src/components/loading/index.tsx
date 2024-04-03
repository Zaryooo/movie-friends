import { CircularProgress } from '@mui/material';

export default function Loading() {
    return (
        <div className='container mx-auto px-5 py-2'>
            <div className='text-center mt-7 mb-7'>
                <CircularProgress />
            </div>
        </div>
    )
}