import { MotionCardContent } from "@/components/ui/motioncards";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
      
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
       
          <MotionCardContent className="flex flex-col bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/ivara.png"
                alt="Ivara Project"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">IVARA Digital Solutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Crafted with React, Tailwind, TypeScript & Framer Motion — a
                digital marketing agency helping brands grow online through
                creative, modern solutions.
              </p>
              <Link
                href="https://ivara.co.uk " 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors w-max"
              >
                View Project
              </Link>
            </div>
          </MotionCardContent>

          
          <MotionCardContent className="flex flex-col bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/Otis.png"
                alt="Otisoft Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">
                Otisoft — African Freelance Hub
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connecting African talent with global opportunities — verified
                clients, secure payments, and a strong freelancer community
                built for Africa.
              </p>
              <Link
                href="https://beta.otisoft.io/" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors w-max"
              >
                View Project
              </Link>
            </div>
          </MotionCardContent>


          <MotionCardContent className="flex flex-col bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden md:col-span-2">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/tunescape.png"
                alt="Tunescape Project"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">Tunescape Music App</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A sleek music app built with Next.js, TypeScript & Tailwind CSS
                — explore rhythm, flow, and motion with an immersive listening
                experience powered by smooth UI animations.
              </p>
              <Link
                href="https://tunescape-ruhp.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors w-max"
              >
                View Project
              </Link>
            </div>
          </MotionCardContent>
        </div>
      </div>
    </section>
  );
}
