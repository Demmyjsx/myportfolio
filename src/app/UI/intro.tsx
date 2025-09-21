import {
  ToggleVault,
  ToggleVaultTrigger,
  ToggleVaultContent,
  ToggleVaultClose,
} from "@/components/ui/toggle-vault";
import AnimatedText from "./animatedText";

import TimeLine from "./timeLine";
import { GridTab } from "./grid";




export default function ToggleVaultDemo() {
  return (
    <>
             <section id="home">
            <div className="relative w-full ">
                <ToggleVault>
                    <ToggleVaultTrigger className="w-20 h-8 text-sm">
                    MENU
                    </ToggleVaultTrigger>
                    <ToggleVaultClose className="w-20 h-8 text-sm">
                    CLOSE
                    </ToggleVaultClose>
                    <ToggleVaultContent className="w-[300px] h-[250px] bg-gray-600 p-8 text-xl flex flex-col gap-4">
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#contact">CONTACT</a>
                    </ToggleVaultContent>
                </ToggleVault>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <AnimatedText />

            </div>
             <h1 className="text-gray-400 mt-36 text-2xl text-center">
                I make websites that are super fast, <br />
                 easy to use, and fun. While many apps today feel heavy and slow, <br />
                  I focus on keeping things simple and <br />
                   smooth so people actually enjoy using them</h1>
            
            
                   
          </div>
    </section>
    <section id="">
        <h1 className="text-3xl text-center text-gray-500"></h1>
          <TimeLine />
    </section>
    <section id="projects">
            <GridTab />

    </section>
    </>
   
  
  );
}
