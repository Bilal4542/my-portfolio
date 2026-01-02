import React from 'react'

const skills = [
  {
    heading: 'Languages',
    firstSkill: 'JavaScript',
    firstSkillCount: 95,
    secondSkill: 'TypeScript',
    secondSkillCount: 85,
    thirdSkill: 'SQL/NoSQL',
    thirdSkillCount: 80,
    fourthSkill: 'HTML/CSS',
    fourthSkillCount: 95,
},
  {
    heading: 'Frameworks and Libraries',
    firstSkill: 'React.js',
    firstSkillCount: 95,
    secondSkill: 'Node.js',
    secondSkillCount: 85,
    thirdSkill: 'Next.js',
    thirdSkillCount: 90,
    fourthSkill: 'Express.js',
    fourthSkillCount: 85,
},
  {
    heading: 'Databases and Cloud',
    firstSkill: 'MongoDB',
    firstSkillCount: 90,
    secondSkill: 'AWS',
    secondSkillCount: 85,
    thirdSkill: 'PostgreSQL',
    thirdSkillCount: 80,
    fourthSkill: 'Docker',
    fourthSkillCount: 70,
},
  {
    heading: 'Tools and Others',
    firstSkill: 'Git/Github',
    firstSkillCount: 95,
    secondSkill: 'REST APIs',
    secondSkillCount: 85,
    thirdSkill: 'Agile/Scrum',
    thirdSkillCount: 90,
    fourthSkill: 'Microservices',
    fourthSkillCount: 85,
},
]


const Skills = () => {
  return (
    <div className='w-[90%] lg:w-[80%] m-auto'>
      <div className="flex flex-col items-center justify-center gap-2 p-8">
        <h1 className='text-2xl md:text-4xl font-bold mt-8'>Technical Skills</h1>
        <div className="bg-blue-500 rounded h-1 w-[20%] m-auto"></div>
      </div>
     <div className="flex items-center justify-center flex-col md:flex-row flex-wrap gap-6">
       {skills.map((skill)=>{
        return(
          <div className='w-full md:w-[47%] shadow p-8 flex flex-col justify-between gap-2'>
          <h1 className='text-2xl font-bold pt-4'>{skill.heading}</h1>
          <div className='flex items-center justify-between'>
          <p className='text-lg'>{skill.firstSkill}</p>
          <p className='text-xl p-2 text-blue-500 font-bold'>{skill.firstSkillCount}%</p>
          </div>
          <div className='bg-gray-300 h-2 w-[100%] rounded-xl'>
          <div style={{ width: `${parseInt(skill.firstSkillCount)}%` }}className="h-2 bg-gradient-to-r from-blue-300 to-blue-500 rounded-xl" ></div>
          </div>
          <div className='flex items-center justify-between'>
          <p className='text-lg'>{skill.secondSkill}</p>
          <p className='text-xl p-2 text-blue-500 font-bold'>{skill.secondSkillCount}%</p>
          </div>
          <div className='bg-gray-300 h-2 w-[100%] rounded-xl'>
          <div style={{ width: `${parseInt(skill.secondSkillCount)}%` }} className="h-2 bg-gradient-to-r from-blue-300 to-blue-500 rounded-xl" ></div>
          </div>
          <div className='flex items-center justify-between'>
          <p className='text-lg'>{skill.thirdSkill}</p>
          <p  className='text-xl p-2 text-blue-500 font-bold'>{skill.thirdSkillCount}%</p>
          </div>
          <div className='bg-gray-300 h-2 w-[100%] rounded-xl'>
          <div style={{ width: `${parseInt(skill.thirdSkillCount)}%` }} className="h-2 bg-gradient-to-r from-blue-300 to-blue-500 rounded-xl" ></div>
          </div>
          <div className='flex items-center justify-between'>
          <p className='text-lg'>{skill.fourthSkill}</p>
          <p className='text-xl p-2 text-blue-500 font-bold'>{skill.fourthSkillCount}%</p>
          </div>
          <div className='bg-gray-300 h-2 w-[100%] rounded-xl'>
          <div style={{ width: `${parseInt(skill.fourthSkillCount)}%` }} className="h-2 bg-gradient-to-r from-blue-300 to-blue-500 rounded-xl" ></div>
          </div>
        </div>
        )
      })}
     </div>
    </div>
  )
}

export default Skills
