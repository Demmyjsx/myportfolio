import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function ImageProject() {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="relative w-full overflow-hidden rounded-md"
    >
      <Image
        src="public/project1.png"
        alt="Notebook and coffee by Giulia Bertelli on Unsplash"
        fill
        className="h-full w-full not-prose rounded-md object-cover"
      />
    </AspectRatio>
  );
}
