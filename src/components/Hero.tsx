import Image from "next/image";
import { Badge } from "./ui/badge";
import { FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
import { SiCisco, SiGmail, SiMongodb } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import GradualSpacing from "./ui/gradualSpacing";
import Link from "next/link";
import { DiCisco } from "react-icons/di";

const Hero = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-blue-600 rounded-full">
          {/* <Image src={"/images/pp.png"} alt="profile picture" fill /> */}
        </div>
        <h3 className="text-2xl font-bold">Romain Bidault</h3>
      </div>
      <GradualSpacing
        text="Developer FullStack"
        className="text-3xl italic"
        duration={0.2}
      />
      <div>
        <p>
          I create many //Applications// for my work and my personal projects.{" "}
        </p>
        <p>I am passionate, curious and creative</p>
      </div>
      <div>
        <p>{"I'am certified in :"}</p>
        <div className="m-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-primary text-primary-foreground h-6 w-6 rounded-full">
              <FaUser />
            </div>
            <p>Scrum Master</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-primary text-primary-foreground h-6 w-6 rounded-full">
              <SiCisco size={20} />
            </div>
            Cisco
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-primary text-primary-foreground h-6 w-6 rounded-full">
              <SiMongodb size={20} />
            </div>
            Mongo DB
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col gap-4">
        <Link href="https://github.com/Hulcox">
          <Badge className="flex gap-2 w-min">
            <FaGithub size={20} />
            Github
          </Badge>
        </Link>
        <Link href="https://www.linkedin.com/in/romain-bidault/">
          <Badge className="flex gap-2 w-min">
            <FaLinkedin size={20} />
            LinkedIn
          </Badge>
        </Link>
        <Link href="mailto:romainbidault08@gmail.com">
          <Badge className="flex gap-2 w-min">
            <SiGmail size={20} />
            romainbidault08@gmail.com
          </Badge>
        </Link>
        <Link href="tel:+33767661465">
          <Badge className="flex gap-2 w-min">
            <BsFillTelephoneFill size={20} />
            <p>
              <span>+33</span>
              <span>&nbsp;7</span>
              <span>&nbsp;67</span>
              <span>&nbsp;66</span>
              <span>&nbsp;14</span>
              <span>&nbsp;65</span>
            </p>
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
