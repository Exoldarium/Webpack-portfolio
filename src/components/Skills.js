import React, { useEffect, useState } from "react";

function Skills(props) {
  const skills = props.skills;
  const [isHalfShown, setIsHalfShown] = useState('');
  
  useEffect(() => {
    function debounce(func, timeout = 20){
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
      };
    }

    function handleActive() {
      const skillsDiv = document.querySelector('.skills_list');
      const scrollBottomTop = (window.scrollY + window.innerHeight) - skillsDiv.offsetHeight / 2;
      const halfShown = scrollBottomTop > skillsDiv.offsetTop;      
      setIsHalfShown(halfShown);
    }

    window.addEventListener('scroll', debounce(handleActive));
    return () => window.removeEventListener('scroll', handleActive);
  }, [setIsHalfShown]);
  
  return (
      <section id="skills">
        <div className="skills_list">
            <h1 className="skills_header">
                <p className={`skills_paragraphSkillTech ${isHalfShown ? 'transition1' : ''}`}>Skills and technologies</p>
                <p className={`skills_paragraphWorking ${isHalfShown ? 'transition2' : ''}`}>Currently working with</p>
            </h1>
            <div className={`skills_skillBars ${isHalfShown ? 'transition3' : ''}`}>
                {skills.map((skill => (
                    <div key={skill} className="skills_skillNames">
                            <span className="skills_span">{skill}</span>
                    </div>
                )))}
            </div>
        </div>
      </section>
    );
  }

  export default Skills;