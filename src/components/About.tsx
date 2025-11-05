import LangIcons from "./LangIcons";

const About = () => {
  return (
    <section className="w-full flex flex-col gap-4 items-center">
      <p className="text-gray-500 leading-10">
        I build fast, scalable web apps using 
      <LangIcons
        name={"Typescript"}
        imgSrc="/typescript.jpg"
        width={5}
        height={5}
      />
       ,
        <LangIcons
        name={"Next.js"}
        imgSrc="/nextjs.png"
        width={6}
        height={6}
      /> ,
      <LangIcons
        name={"React"}
        imgSrc="/react.png"
        width={6}
        height={6}
      /> ,
        <LangIcons
        name={"Golang"}
        imgSrc="/go.png"
        width={6}
        height={6}
      /> and
        <LangIcons
        name={"PostgreSQL"}
        imgSrc="/postgresql.png"
        width={6}
        height={6}
      /> with a strong focus on clean architecture and UI design.
      </p>
    </section>
  );
};

export default About;
