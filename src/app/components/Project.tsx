import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { MdOutlineOpenInNew } from "react-icons/md";

type ProjectProps = {
  imageSrc: StaticImageData;
  imageAlt: string;
  projectName: string;
  projectDescription: string;
  projectLink: string;
};

const inter = Inter({ subsets: ["latin"] });

const Project = ({
  imageSrc,
  imageAlt,
  projectName,
  projectDescription,
  projectLink,
}: ProjectProps) => {
  return (
    <div className={`w-[48%] mb-6 bg-[#F8F8FA] flex flex-col p-10 rounded-lg`}>
      <div className="flex justify-between">
        <div className="mb-6 w-20 h-20 aspect-square flex p-3 bg-white rounded-full items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-auto h-auto rounded-lg items-center"
          />
        </div>
        <Link href={projectLink} target="_blank" rel="noopener noreferrer">
          <MdOutlineOpenInNew className="text-[#96979A]" size={25} />
        </Link>
      </div>
      <h2 className="text-lg text-black font-bold mb-2">{projectName}</h2>
      <p className="text-[#96979A] text-sm mb-2">{projectDescription}</p>
    </div>
  );
};

export default Project;
