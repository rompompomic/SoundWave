import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AudioPlayerProps {
  audioUrl: string;
  duration: string;
  title: string;
}

export default function AudioPlayer({ audioUrl, duration, title }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(33); // Mock progress

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // TODO: Implement actual audio playback when audioUrl is available
  };

  return (
    <div className="audio-player rounded-lg p-4 mb-4" data-testid={`audio-player-${title}`}>
      <div className="flex items-center justify-between">
        <Button
          onClick={togglePlay}
          className="bg-accent-orange text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors p-0"
          data-testid={`play-button-${title}`}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </Button>
        <div className="flex-1 mx-4">
          <div className="w-full bg-deep-black rounded-full h-2">
            <div 
              className="bg-accent-orange h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
              data-testid={`progress-bar-${title}`}
            ></div>
          </div>
        </div>
        <span className="text-sm text-soft-gray" data-testid={`duration-${title}`}>{duration}</span>
      </div>
    </div>
  );
}
