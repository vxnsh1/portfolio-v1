import LangIcons from "./LangIcons";
import Socials from "./Socials";

type AboutProps = {
  onContribLoaded?: () => void;
  contribLoaded?: boolean;
};

const About = ({ onContribLoaded, contribLoaded = false }: AboutProps) => {
  return (
    <section className="w-full flex flex-col gap-10 items-center">
      <p className="text-gray-500 leading-10">
        I build fast, responsive, and accessible web interfaces using
        <LangIcons
          name={"Typescript"}
          imgSrc="/typescript.png"
          width={1}
          height={1}
        />
        ,
        <LangIcons
          name={"Next.js"}
          imgSrc="/nextjs.png"
          width={1}
          height={1}
        /> ,
        <LangIcons
          name={"React"}
          imgSrc="/react.png"
          width={1}
          height={1}
        />,
        <LangIcons 
          name={"Framer Motion"}
          imgSrc="/framer-motion.svg"
          width={1}
          height={1}
        />,
        <LangIcons 
          name={"GSAP"}
          imgSrc="/gsap.png"
          width={1}
          height={1}
        /> & 
        <LangIcons 
          name={"Shadcn/UI"}
          imgSrc="/shadcn.png"
          width={1}
          height={1}
        />
        with a sharp eye for UI design and user experience.
      </p>
      <Socials />

      {/* GitHub contributions graph with blur overlay */}
      <div className="relative w-full max-w-[750px] md:h-30 h-24 aspect-3/2">
        {/* Blur overlay - only on the graph */}
        <div
          className={`absolute inset-0 backdrop-blur-sm bg-black/30 z-10 pointer-events-none transition-opacity duration-700 ease-out ${
            contribLoaded ? "opacity-0" : "opacity-100"
          }`}
        />
        
        <iframe
          src="https://jandee.vercel.app/vxnsh1?redias=3&margin=2&footer=true&weeks=false&scheme=dark"
          className="w-full h-auto border-none"
          title="GitHub Contributions"
          onLoad={() => onContribLoaded && onContribLoaded()}
        />
      </div>
      
      <div className="w-full border-b border-gray-900 mt-10"></div>
    </section>
  );
};

export default About;