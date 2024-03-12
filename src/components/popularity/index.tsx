import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography,
} from '@mui/material';

export default function Popularity(params: {
  popularity: number;
  props?: LinearProgressProps;
}) {
  const value = Math.round(params.popularity) / 20;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant='determinate' value={value} {...params.props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant='body2'>{`${value}%`}</Typography>
      </Box>
    </Box>
  );
}
