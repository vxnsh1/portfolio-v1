type LangIconsProps = {
  name: string;
  imgSrc: string;
  width: number;
  height: number;
};

const LangIcons = ({ name, imgSrc, width, height }: LangIconsProps) => {
  return (
    <span className="cursor-target inline-flex h-8 items-center justify-center py-1 px-2 bg-gray-800/50 relative top-1 m-2 rounded border-dashed border-gray-700 border-2 gap-2 text-white">
      <img src={imgSrc} alt={`${name} icon`} className={"rounded"} 
      style={{ width: `${width}rem`, height: `${height}rem` }}
      />
      <span className="font-bold">{name}</span>
    </span>
  );
};

export default LangIcons;