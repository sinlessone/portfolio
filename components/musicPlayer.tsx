"use client"
import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {FaPause, FaPlay} from "react-icons/fa";

const MusicPlayer = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [duration, setDuration] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const currentAudio = audioRef.current;
        if (!currentAudio) return;
        function handleLoad() {
            setLoading(false);
        }
        if (currentAudio.readyState >= 2) {
            handleLoad();
        }
        currentAudio.addEventListener("loadeddata", handleLoad);
        currentAudio.addEventListener("canplay", handleLoad)

        return () => {
            currentAudio.removeEventListener("loadeddata", handleLoad);
            currentAudio.removeEventListener("canplay", handleLoad);
        }

    }, [])



    function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
        const newTime = Number(e.currentTarget.value)
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    }
    function parseTime(time:number) {
        const t = Math.floor(time) / 60
        let s: number | string = Math.round((t % 1) * 60)
        const m = Math.floor(t)
        if (s < 10) {
            s = s.toString().padStart(2, '0')
        }
        return `${m}:${s}`
    }

    function handlePlay() {
        if (!audioRef.current) return
        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
        } else {
            audioRef.current.play();
            setPlaying(true);
        }
    }

    return (

        <div className={"outline outline-[#1f1f21] w-[50%] rounded-lg bg-[#131314] p-4 pt-2 relative"}>
            <button className={"absolute"} onClick={() => {
                setClicked(true)
                if (!audioRef.current) return
                audioRef.current.play();
                audioRef.current.volume = 0.3
                setDuration(audioRef.current.duration)
                if (!playing) {
                    setPlaying(true);
                }
            }}>
                <div className={`flex items-center justify-center h-screen w-screen fixed inset-0 bg-[#121212] z-2 transition duration-400 cursor-pointer ${clicked ? "opacity-0" : "opacity-100"} ${clicked ? "pointer-events-none" : "pointer-events-auto"}`}>
                    <div className={"flex items-center justify-center w-[60%] md:w-[20%] h-[15%] outline outline-[#1f1f21] rounded-md transition-all duration-500 ease-in-out hover:-translate-y-2"}>
                        <span className={"text-lg "}>Click Anywhere!</span>
                    </div>
                </div>
            </button>


            <div className={"flex flex-col items-center justify-center p-3 gap-10"}>
                <div className={"flex flex-col items-center justify-center"}>
                    <Image className={"rounded-full"} src={"/prom.jpg"} alt={"artwork"} width={64} height={64}></Image>
                    <span className={"pt-2"}>Prom.</span>
                </div>
            </div>
            <div>
                <div className={"flex flex-row items-center justify-center"}>
                    <div className={"flex flex-col items-center justify-center w-[90%] relative"}>
                        <div className={"flex flex-row items-center justify-between absolute w-full -translate-y-6 text-gray-400 text-sm"}>
                            <span>{parseTime(currentTime)}</span>
                            <span>{parseTime(duration)}</span>

                        </div>
                        <input
                            className={"w-full accent-purple-400"}
                            type="range"
                            autoComplete="off"
                            min="0"
                            max={duration}
                            value={currentTime}
                            onChange={handleSeek}
                        />
                    </div>
                </div>
                <div className={"flex flex-row items-center justify-center"}>
                    <Button onClick={handlePlay}>
                        {loading ? <div className={"flex flex-row items-center justify-center gap-1 p-1"}>
                            <div className={"h-5 w-5 border border-gray-500 border-t-blue-400 animate-spin animation-duration-2000 rounded-full"}></div>
                            <span>Loading</span>
                        </div> : playing ? <div className={"flex flex-row items-center justify-center gap-1 p-1"}>
                            <FaPause></FaPause>
                            <span>Pause</span>
                        </div> : <div className={"flex flex-row items-center justify-center gap-1 p-1"}>
                            <FaPlay></FaPlay>
                            <span>Play</span>
                        </div>}

                    </Button>
                </div>

            </div>
            <audio
                ref={audioRef}
                src={"/prom.mp3"}

                onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                onLoadedData={(e) => {
                    setLoading(false)
                    setDuration(e.currentTarget.duration);
                }}
                onDurationChange={(e) => {
                    setDuration(e.currentTarget.duration);
                }}
                onPause={() => {
                    setPlaying(false)
                }}
                onPlay={() => {
                    setPlaying(true)
                }}

                onEnded={() => {setPlaying(false)}}
            />
        </div>
    );
};

export default MusicPlayer;