import {type FC} from 'react';

type MySkill = {
  id: number,
  name: string
}

// define array like this
interface SkillsList {
  skills: MySkill[]
}

const Skills:FC<SkillsList> = ({skills}) => {
  return (
    <ul>
      {skills.map((s:MySkill) => {
          return (
            <li>{s.name}</li>
          )
      })}
    </ul>
  )
}

export default Skills;