import TextType from "./TypingText";

const Hero = () => {
  return (
    <section className="w-full flex justify-between">
      <div className="h-full flex flex-col gap-2">
        <h1 className="md:text-2xl tracking-tighter">
          Hello 🤙, I am <span className="underline">Vansh Chouhan</span> —
        </h1>
        <TextType
        className="md:text-3xl text-xl font-medium text-gray-400"
          text={["A Frontend Developer", "A Nextjs + Typescript Builder", "Anime, F1, and Football Enthusiast"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="█"
        />
      </div>
      <div className="h-full flex justify-end">
        <img src="/wenaria.jpg" alt="logo" className="w-24 h-24 max-sm:hidden rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
