import { FaGithub } from "react-icons/fa";
import SkillIcon from "./ui/skillIcon";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const Skills = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Skills</h1>
      <div>
        <div className="flex flex-col gap-4">
          <h5 className="text-lg">Langages</h5>
          <SkillIcon
            text="Javascript / Typescript"
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
            color="#4584b6"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
