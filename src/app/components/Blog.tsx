import Link from "next/link";
import { MdOutlineOpenInNew } from "react-icons/md";

type BlogProps = {
  blogLink: string;
  backgroundColor: string;
  blogTitle: string;
  blogDescription: string;
};

const Blog = ({
  blogLink,
  backgroundColor,
  blogTitle,
  blogDescription,
}: BlogProps) => {
  return (
    <div
      className={`w-full bg-[#${backgroundColor}] p-10 flex-col justify-center rounded-lg mb-1`}
    >
      <div className="flex w-full justify-between">
        <p className="text-[#96979A] text-sm mb-2">medium.com</p>
        <Link href={blogLink} target="_blank" rel="noopener noreferrer">
          <MdOutlineOpenInNew className="text-[#96979A]" size={25} />
        </Link>
      </div>
      <h2 className="text-lg text-black font-bold mb-2">{blogTitle}</h2>
      <p className="text-[#96979A] text-sm mb-2">{blogDescription}</p>
    </div>
  );
};

export default Blog;
