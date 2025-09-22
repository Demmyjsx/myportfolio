import TextHighlighter from "@/components/ui/text-highlighter";
import { CursorHighlight } from "@/components/ui/cursor-highlight";

export default function AnimatedText() {
  return (
    <div className="mx-auto -mt-35 max-w-lg  text-center">
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
    </div>
  );
}
