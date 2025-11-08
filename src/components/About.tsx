import LangIcons from "./LangIcons";
import Socials from "./Socials";

const About = () => {
  return (
    <section className="w-full flex flex-col gap-4 items-center">
      <p className="text-gray-500 leading-10">
        I build fast, scalable web apps using 
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
      /> ,
        <LangIcons
        name={"Golang"}
        imgSrc="/go.png"
        width={1}
        height={1}
      /> and
        <LangIcons
        name={"PostgreSQL"}
        imgSrc="/postgresql.png"
        width={1}
        height={1}
      /> with a strong focus on clean architecture and UI design.
      </p>
      <Socials />

      <iframe
  src={`https://jandee.vercel.app/vxnsh1?redias=3&margin=2&footer=true&weeks=false`}
  style={{ width: "750px", height: "auto", border: "none" }}
  title="GitHub Contributions"
/>


      <div className="w-full border-b border-gray-900 mt-10"></div>
      
    </section>
  );
};

export default About;
