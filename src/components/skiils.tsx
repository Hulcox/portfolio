import { FaGithub } from "react-icons/fa";
import SkillIcon from "./ui/skillIcon";
import {
  SiC,
  SiCplusplus,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const Skills = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Skills</h1>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h5 className="text-lg text-center">Langages</h5>
          <SkillIcon
            text="Typescript"
            icon={<SiTypescript size={23} />}
            color="#3178c6"
          />
          <SkillIcon
            text="Java / Kotlin"
            icon={<FaJava size={30} />}
            color="#f89820"
          />
          <SkillIcon
            text="C / C++ / C#"
            icon={<SiCplusplus size={30} />}
            color="#085e9f"
          />
          <SkillIcon
            text="Python"
            icon={<SiPython size={30} />}
            color="#ffde57"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-lg text-center">Front End</h5>
          <SkillIcon
            text="React"
            icon={<SiReact size={23} />}
            color="#3178c6"
          />
          <SkillIcon
            text="Next"
            icon={<SiNextdotjs size={30} />}
            color="#f89820"
          />
          <SkillIcon
            text="Tailwind css"
            icon={<SiTailwindcss size={30} />}
            color="#ffde57"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-lg text-center">Back End</h5>
          <SkillIcon
            text="Postgres SQL"
            icon={<SiPostgresql size={23} />}
            color="#3178c6"
          />
          <SkillIcon
            text="Mongo DB"
            icon={<SiMongodb size={30} />}
            color="#f89820"
          />
          <SkillIcon
            text="Prisma"
            icon={<SiPrisma size={30} />}
            color="#085e9f"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-lg text-center">Other</h5>
          <SkillIcon
            text="Figma"
            icon={<SiFigma size={23} />}
            color="#3178c6"
          />
          <SkillIcon text="Git" icon={<SiGit size={30} />} color="#f89820" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
