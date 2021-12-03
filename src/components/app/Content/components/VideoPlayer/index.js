import React, { useRef, useState, useEffect } from "react";
import Video from "asset/mov_bbb.mp4";
import Button from "../../../../Form/button";
import Input from "../../../../Form/input";

const VideoPlayer = () => {
  const [play, setPlay] = useState(false);
  const [volume, setValume] = useState(0);
  const video = useRef();

  useEffect(() => {
    if (play) {
      video.current.play();
    } else {
      video.current.pause();
    }
  }, [play]);

  useEffect(() => {
    video.current.volume = volume;
  }, [volume]);

  const onClickVideo = () => {
    setPlay(!play);
  };

  const onClickPlay = () => {
    setPlay(true);
  };

  const onChangeValume = (value) => {
    setValume(value);
  };

  return (
    <div>
      <video ref={video} onClick={onClickPlay}>
        <source src={Video} type="video/mp4"></source>
      </video>
      <Button onClick={onClickVideo}>{play ? "pause" : "play"}</Button>
      <Input
        onChange={onChangeValume}
        type="number"
        step="0.1"
        min="0"
        max="1"
      />
    </div>
  );
};

export default VideoPlayer;
