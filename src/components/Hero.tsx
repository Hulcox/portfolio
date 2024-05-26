import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-blue-600 rounded-full">RB</div>
        <h4 className="text-2xl font-bold">Romain Bidault</h4>
      </div>
      <h3 className="text-3xl italic">Developer FullStack</h3>
      <div>
        <p>
          I create many //Applications// for my work and my personal projects.{" "}
        </p>
        <p>I am passionate, curious and creative</p>
      </div>
    </div>
  );
};

export default Hero;
