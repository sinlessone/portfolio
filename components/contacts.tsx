"use client"
import React, {useState} from 'react';
import { FaLastfmSquare, FaCheck, FaDiscord, FaGithub } from "react-icons/fa";
import { SiNamemc, SiAnilist} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Contacts = () => {
    const [copiedD, setCopiedD] = useState(false);
    const [copiedE, setCopiedE] = useState(false);

    async function copyText(text: string) {
        await navigator.clipboard.writeText(text);
    }
    return (
        <div className={"flex flex-col gap-2 outline outline-[#1f1f21] h-full bg-[#131314] rounded-lg p-4 pt-2 items-center w-119"}>
            <div className={"flex items-center justify-center"}>
                <span className={"text-gray-400 text-lg"}>Contacts and Socials</span>
            </div>
            <div className={"flex flex-col items-center justify-center h-full"}>

                <div className={"flex flex-row flex-wrap justify-center gap-3"}>
                    {/*Github*/}
                    <Link href={"https://github.com/sinlessone/"} target="_blank" rel="noopener noreferrer">
                        <div className={"flex flex-row outline outline-[#1f1f21] px-2 py-1 rounded-sm gap-2 transition-colors hover:bg-[#212124] duration-300"}>
                            <FaGithub className={"translate-y-1"}></FaGithub>
                            Github
                        </div>
                    </Link>
                    {/*Discord*/}
                    <div className={"flex flex-row outline outline-[#1f1f21] px-2 py-1 rounded-sm transition-colors hover:bg-[#5865f2] duration-300"}>
                        <button onClick={() => {
                            copyText("sinlessone")
                            setCopiedD(true)
                            setTimeout(() => {
                                setCopiedD(false);
                            }, 1500)
                        }}>
                            <div className={`flex flex-row  items-center justify-center`}>
                                <div className={`flex flex-row gap-1 transition-all duration-400 ${copiedD ? "opacity-0" : "opacity-100"}`}>
                                    <FaDiscord className={`translate-y-1`}></FaDiscord>
                                    <span className={""}>@sinlessone</span>
                                </div>
                                <div className={`absolute flex flex-row gap-1 transition-all duration-400 ${copiedD ? "opacity-100" : "opacity-0"}`}>
                                    <FaCheck className={`translate-y-1`}></FaCheck>
                                    <span className={""}>Copied!</span>
                                </div>
                            </div>
                        </button>
                    </div>
                    {/*Email*/}
                    <div className={"flex flex-row outline outline-[#1f1f21] px-2 py-1 rounded-sm transition-colors hover:bg-[#9a2ff2] duration-300"}>
                        <button onClick={() => {
                            copyText("mohisdad@proton.me")
                            setCopiedE(true)
                            setTimeout(() => {
                                setCopiedE(false);
                            }, 1500)
                        }}>
                            <div className={`flex flex-row items-center justify-center`}>
                                <div className={`flex flex-row gap-1 transition-all duration-600 ${copiedE ? "opacity-0" : "opacity-100"}`}>
                                    <MdEmail className={`translate-y-1`}></MdEmail>
                                    <span className={""}>Email</span>
                                </div>
                                <div className={`absolute flex flex-row gap-1  transition-all duration-600 ${copiedE ? "opacity-100" : "opacity-0"}`}>
                                    <FaCheck className={`translate-y-1`}></FaCheck>
                                    <span className={""}>Copied!</span>
                                </div>
                            </div>
                        </button>
                    </div>
                    {/*anilist*/}
                    <Link href={"https://anilist.co/user/sinlessone/"} target="_blank" rel="noopener noreferrer">
                        <div className={"flex flex-row outline outline-[#1f1f21] px-2 py-1 rounded-sm gap-2 transition-colors hover:bg-[#0b1622] duration-300"}>
                            <SiAnilist className={"translate-y-1"}></SiAnilist>
                            Anilist
                        </div>
                    </Link>
                    {/*last.fm*/}
                    <Link href={"https://www.last.fm/user/dtMoh/"} target="_blank" rel="noopener noreferrer">
                        <div className={"flex flex-row outline outline-[#1f1f21] px-2 py-1 rounded-sm gap-2 transition-colors hover:bg-[#d1170e] duration-300"}>
                            <FaLastfmSquare className={"translate-y-1"}></FaLastfmSquare>
                            Last.fm
                        </div>
                    </Link>
                    {/*namemc*/}
                    <Link href={"https://namemc.com/profile/PureOfSin.1"} target="_blank" rel="noopener noreferrer">
                        <div className={"flex flex-row outline outline-[#1f1f21] px-2 py-1 rounded-sm gap-2 transition-colors hover:bg-[#12161a] duration-300"}>
                            <SiNamemc className={"translate-y-1"}></SiNamemc>
                            Namemc
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Contacts;