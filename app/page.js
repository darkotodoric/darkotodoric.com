import Image from "next/image";
import { FaGithub, FaLinkedin, FaMedium, FaDev, FaInstagram, FaHackerrank } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiMonkeytype } from "react-icons/si";
import Box from "./components/box";
import CurrentYear from "./components/currentYear";
import Message from "@/app/components/message";

export default function Home() {
  return (
      <>
        <div className="flex flex-col items-center my-10">
            <div>
                <Image src="/logo.svg" alt="Logo" className="opacity-80" width="60" height="60"></Image>
            </div>

            <Message />
            <Box href="https://github.com/darkotodoric" icon={<FaGithub size="30" />} title="GitHub" description="where I build software" ></Box>
            <Box href="https://www.linkedin.com/in/darkotodoric/" icon={<FaLinkedin size="30" />} title="LinkedIn" description="where we can connect" ></Box>
            <Box href="https://medium.com/@darkotodoric" icon={<FaMedium size="30" />} title="Medium" description="where words flow" ></Box>
            <Box href="https://dev.to/darkotodoric" icon={<FaDev size="30" />} title="DEV" description="where knowledge spreads" ></Box>
            <Box href="https://www.instagram.com/onlytodoric/" icon={<FaInstagram size="30" />} title="Instagram" description="where I share my life" ></Box>
            <Box href="https://x.com/onlytodoric" icon={<FaXTwitter size="30" />} title="X" description="where you can hear me" ></Box>
            <Box href="https://www.hackerrank.com/darkotodoric/" icon={<FaHackerrank size="30" />} title="HackerRank" description="where you can see a bit of my superpower" ></Box>
            <Box href="https://monkeytype.com/profile/darkotodoric" icon={<SiMonkeytype size="30" />} title="Monkeytype" description="where you can see my speed" ></Box>

            <div className="opacity-35 mt-20">
                Code is open source on my GitHub
            </div>

            <div className="opacity-40 mt-1">
                @ <CurrentYear /> Darko Todorić
            </div>
        </div>
      </>
  );
}