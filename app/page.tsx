'use client';
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';


export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* TEXT */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Fullstack Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Pirunporn Boy</span></h1>

            <p className="max-w-[500px] mb-9 text-white/80">I'm a FullStack developer and I enjoy learning and exploring new technologies. To continuously improve my skills.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant={"outline"} onClick={() => window.open('https://drive.google.com/file/d/1PUTIKF6cw5mJbMdM5C3sxBMAXJPmM4aE', '_blank')} size={"lg"} className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* PHOTO */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
