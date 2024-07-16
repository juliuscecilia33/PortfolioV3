import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

type ExperienceProps = {
  imageSrc: StaticImageData;
  imageAlt: string;
  description: string;
  location: string;
  positionName: string;
  dateOfExperience: string;
  backgroundColor: string;
  companyName: string;
};

const inter = Inter({ subsets: ["latin"] });

const Experience = ({
  imageSrc,
  imageAlt,
  description,
  positionName,
  backgroundColor,
  location,
  dateOfExperience,
  companyName,
}: ExperienceProps) => {
  return (
    <div
      className={`w-full bg-[${backgroundColor}] p-10 flex justify-center rounded-lg mb-1`}
    >
      <div className="flex w-[25%]">
        <div className="w-28 h-28 aspect-square flex p-6 bg-white rounded items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-auto h-auto rounded-lg items-center"
          />
        </div>
      </div>
      <div className="flex flex-col w-[75%]">
        <div className="flex flex-col">
          <p className="text-[#96979A] text-sm mb-2">{dateOfExperience}</p>
          <h2 className="text-lg text-black font-bold mb-2">
            {positionName} @{" "}
            <span className="text-[#E95278]">{companyName}</span>
          </h2>
          <p className="text-[#96979A] text-sm mb-2">{location}</p>
          <p className="text-black text-sm mb-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
