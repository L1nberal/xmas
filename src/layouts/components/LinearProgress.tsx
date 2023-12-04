import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type TProgressProps = {
  progress: number;
};

export const LinearProgressBar = ({ progress }: TProgressProps) => {
  const LinearProgressWithLabel = (
    props: LinearProgressProps & { value: number }
  ) => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant='determinate' {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant='body2' color='white'>{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ width: '250px' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
};
