import { Landscape } from "@/components/Landscape";
import Image from "next/image";
import Link from "next/link";
import github from "../public/github.webp";
import linkedin from "../public/linkedin.webp";

const page = () => {
  return (
    <div
      className={`h-screen w-full text-slate-200 bg-radial-[at_50%_50%] from-gray-700 to-slate-950 flex flex-col justify-between items-center overflow-hidden`}
    >
      <div className={`mt-10 lg:mt-12 text-center w-full flex flex-col items-center`}>
        <p className="text-2xl lg:text-5xl text-center font-light">
          Site under construction
        </p>
        <div className="w-9/10 max-w-120 h-1 bg-slate-300 mb-1" />
        <p className={`mt-5`}>Sorry for the inconvenience.</p>
        <p>You can stay in touch with me through social media.</p>
        <div className={`mt-5`}>
          <div className={`flex gap-2 items-center justify-center`}>
            <Link
              href="https://www.linkedin.com/in/bryant-ackerman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`w-7 h-7 relative`}>
                <Image
                  src={linkedin}
                  alt="linkedin"
                  fill
                  className={`object-cover object-center`}
                />
              </div>
            </Link>
            <Link
              href="https://github.com/Bryant0415"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`w-7 h-7 relative`}>
                <Image
                  src={github}
                  alt="linkedin"
                  fill
                  className={`object-cover object-center`}
                />
              </div>
            </Link>
          </div>
          <Link href={`mailto:bryantackerman0415@gmail.com`} className={`text-center`}>
            bryantackerman0415@gmail.com
          </Link>
        </div>
      </div>
      <Landscape />
     
    </div>
  );
};
export default page;
