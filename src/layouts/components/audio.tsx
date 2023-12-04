import { useState } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import christmasSong from '../../assets/audios/christmasSong.mp3';
import santaClaus2 from '../../assets/santaClaus2.gif';

import './header.css';
import { LinearProgressBar } from './LinearProgress';

export const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const progressBar = document.getElementById('progress-bar');
    const audioElement = document.getElementById(
      'audio-element'
    ) as HTMLAudioElement;

    if (audioElement) {
      if (isPlaying) {
        audioElement?.pause();
        // santaclausImage?.classList.remove('playing');
        progressBar?.classList.remove('appearing');
      } else {
        audioElement?.play();
        // santaclausImage?.classList.add('playing');
        progressBar?.classList.add('appearing');
      }
      setIsPlaying(!isPlaying);
    }

    audioElement?.addEventListener('timeupdate', function () {
      const currentTime = audioElement.currentTime;
      const duration = audioElement.duration;

      // Calculate progress percentage
      const progress = (currentTime / duration) * 100;
      setProgress(progress);
    });
  };

  const handleResetAudio = () => {
    const audioElement = document.getElementById(
      'audio-element'
    ) as HTMLAudioElement;

    if (audioElement) {
      audioElement.currentTime = 0;
    }
  };

  return (
    <div className='flex items-center gap-4'>
      <div>
        <img
          id='santaclaus-image'
          className='w-24 duration-1000 '
          src={santaClaus2}
        />
        <div
          id='progress-bar'
          className='w-0 h-0 overflow-hidden duration-1000'
        >
          <LinearProgressBar progress={progress} />
        </div>
      </div>

      <div>
        <audio id='audio-element' src={christmasSong} />
        <IconButton
          className='!bg-[#fd6f71] !p-[2px] !text-[15px] !text-white'
          onClick={togglePlay}
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>

        <IconButton
          className='!ml-2 !bg-[#fd6f71] !p-1 !text-white'
          onClick={handleResetAudio}
        >
          <ReplayIcon className='!text-[20px]' />
        </IconButton>
      </div>
    </div>
  );
};
