import Link from "next/link";
import Image from "next/image";
import { FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiDiscorddotjs, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import MusicPlayer from "@/components/musicPlayer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import Contacts from "@/components/contacts";
import TimeZone from "@/components/TimeZone";



export default function Home() {
    return (
        <div className={"flex items-center justify-center min-h-screen overflow-x-hidden p-4"}>
            <Analytics/>
            <SpeedInsights/>
            <div className={"flex flex-col items-center justify-center gap-4"}>
                    <div className={"flex flex-col md:flex-row columns-2 gap-4"}>

                        <div className={"flex flex-col gap-4 w-full md:w-auto"}>
                            {/*main card*/}

                            <div className={"outline outline-[#1f1f21] bg-[#131314] p-4 rounded-lg"}>
                                <div className={"flex items-center justify-center"}>
                                    <Image src={"/pfp.webp"} alt={"pfp"} width={60} height={60} className={"rounded-full h-auto"}></Image>
                                </div>
                                <div className={"flex flex-row whitespace-nowrap w-full gap-5 p-4"}>
                                    <span className={"text-gray-200 text-3xl shimmer shimmer-color-purple-400 shimmer-duration-3000"}>Moh</span>
                                    <div className={"h-px w-full translate-y-5 from-white/50 to-gray-800 bg-linear-to-r"}></div>
                                </div>
                                <div className={"flex items-center justify-center text-gray-500 shimmer shimmer-color-blue-400 shimmer-duration-4000"}>
                                    <div className={"flex flex-row gap-4 md:gap-12"}>
                                        <span>Developer</span>
                                        <span>·</span>
                                        <span>Music Enthusiast</span>
                                        <span>·</span>
                                        <span>Student</span>
                                    </div>
                                </div>

                            </div>

                            {/*about me*/}
                            <div className={"outline outline-[#1f1f21] bg-[#131314] p-4 rounded-lg w-full md:w-125"}>
                                <div className={"flex items-center justify-center"}>
                                    <span className={"text-gray-400 text-lg"}>Who am I?</span>
                                </div>
                                <div className={"text-center"}>I am Moh, an 18 year old student from Algeria, I specialize in creating discord bots in Discordjs <SiDiscorddotjs color={"#35376A"} className={"inline-block"}/> and currently learning full stack to create websites in NextJS <RiNextjsFill color={"#35376A"} className={"inline-block"}/>, and always eager to learn more</div>
                            </div>

                            {/*tech stack*/}
                            <div className={"outline  outline-[#1f1f21] rounded-lg p-4 pt-2 bg-[#131314] w-full md:w-125"}>
                                <div className={"flex items-center justify-center"}>
                                    <span className={"text-gray-400 text-lg pb-2"}>Tech Stack</span>
                                </div>
                                <div className={"flex flex-wrap gap-3 select-none items-center justify-center"}>
                                    <div className={"flex flex-row outline outline-[#1f1f21] px-2 py-1 rounded-sm gap-1 transition-colors hover:bg-[#5865f2] duration-300"}>
                                        <SiDiscorddotjs className={"translate-y-1"}></SiDiscorddotjs>
                                        DiscordJS
                                    </div>
                                    <div className={"flex flex-row outline outline-[#1f1f21] px-2 py-1 rounded-sm gap-1 transition-colors hover:bg-[#19b9f2] duration-300"}>
                                        <SiTailwindcss className={"translate-y-1"}></SiTailwindcss>
                                        Tailwind
                                    </div>
                                    <div className={"flex flex-row outline outline-[#1f1f21] px-2 py-1 rounded-sm gap-1 transition-colors hover:bg-[#3f873f] duration-300"}>
                                        <FaNodeJs className={"translate-y-1"}></FaNodeJs>
                                        NodeJS
                                    </div>
                                    <div className={"flex flex-row outline outline-[#1f1f21] px-2 py-1 rounded-sm gap-2 transition-colors hover:bg-[#212124] duration-300"}>
                                        <RiNextjsFill className={"translate-y-1"}></RiNextjsFill>
                                        NextJS
                                    </div>
                                    <div className={"flex flex-row outline outline-[#1f1f21] px-2 py-1 rounded-sm gap-1 transition-colors hover:bg-[#3178c6] duration-300"}>
                                        <SiTypescript className={"translate-y-1"}></SiTypescript>
                                        TypeScript
                                    </div>
                                    <div className={"flex flex-row outline outline-[#1f1f21] px-2 py-1 rounded-sm gap-1 transition-colors hover:bg-[#efd81d] duration-300"}>
                                        <FaJsSquare className={"translate-y-1"}></FaJsSquare>
                                        JavaScript
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"flex flex-col gap-4 w-full md:w-auto"}>

                            {/*projects*/}
                            <div className={"flex flex-col outline outline-[#1f1f21] gap-2 bg-[#131314] rounded-lg p-4 pt-2"}>
                                <div className={"flex items-center justify-center"}>
                                    <span className={"text-gray-400 text-lg"}>Projects</span>
                                </div>

                                <div className={"flex flex-col gap-4 h-full"}>
                                    <div className={"outline outline-[#1f1f21] rounded-lg p-2 pt-1"}>
                                        <div className={"flex items-center justify-center"}>
                                            <Link href={"https://github.com/sinlessone/LunaBot"}>Luna Bot</Link>
                                        </div>
                                        <p className={"text-gray-400"}>A simple yet effective AIO discord bot built in DiscordJS</p>
                                        <Link href={"https://github.com/sinlessone/LunaBot"}>
                                            <span className={"text-gray-400/40"}>https://github.com/sinlessone/LunaBot</span>
                                        </Link>
                                    </div>
                                    <div className={"outline outline-[#1f1f21] rounded-lg p-2 pt-1"}>
                                        <div className={"flex items-center justify-center"}>
                                            <Link href={"https://github.com/sinlessone/portfolio"}>Portfolio</Link>
                                        </div>
                                        <p className={"text-gray-400"}>This website! built in Next.js, mostly for learning</p>
                                        <Link href={"https://github.com/sinlessone/portfolio"}>
                                            <span className={"text-gray-400/40 transition-all text-shadow-sm ease-in-out hover:text-shadow-gray-400/90 hover:animate-bounce duration-400"}>https://github.com/sinlessone/portfolio</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*contacts*/}
                            <Contacts/>
                            <TimeZone/>
                        </div>
                    </div>
                {/*music player*/}
                <MusicPlayer/>
            </div>

        </div>
    )

}
