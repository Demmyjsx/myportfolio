import TextHighlighter from "@/components/ui/text-highlighter";
import { CursorHighlight } from "@/components/ui/cursor-highlight";
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
export default function AnimatedText() {
  return (
    <div className="mx-auto -mt-35 max-w-lg  text-center">
              <Image
            src="/profile.png"
            alt="logo"
            width={600}
            height={400}
            className="w-32 h-32 mx-auto mb-4 rounded-full"
          />

            <h1 className="text-6xl md:text-7xl text-gray-400 font-bold tracking-tight">Bringing designs to life with React & Next.js</h1>
            <br />
            <TextHighlighter type="zigzag" highlightColor="#8F8A83FF">
               <span>
                  <CursorHighlight
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    gradient="from-green-400 via-black-500 to-green-500"
                    showPointer={true}
                    pointerClassName="text-pink-500"
                    direction="right"
                    rectangle="bg-gray-200 dark:bg-green-950 border-blue dark:border-white/20 rounded-lg p-4"
                  >
                    <h1>Ademola Abdul</h1>
                  </CursorHighlight>
                 
               </span>
            </TextHighlighter>
            <div className="mt-4  md:flex md:justify-center md:gap-6">
                    <a href="https://www.linkedin.com/in/ademola-abdul/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="mx-auto mt-4 text-gray-400 hover:text-gray-600" size={40} />
                    </a>
                    <a href="https://github.com/Demmyjsx" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="mx-auto mt-4 text-gray-400 hover:text-gray-600" size={40} />
                    </a>
                    <a href="https://x.com/Demmy_abs" target="_blank" rel="noopener noreferrer">
                      <BsTwitterX className="mx-auto mt-4 text-gray-400 hover:text-gray-600" size={40} />
                    </a>
            </div>
    </div>
  );
}
