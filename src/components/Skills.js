import React, { useEffect } from "react";

function Skills(props) {
  const skills = props.skills;
  useEffect(() => {
    function debounce(func, timeout = 20){
      let timer;
      return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
      };
    }

    // set is halfShown into state setState(isHalfShown), if true add transition
    // try without useEffect just a separate function
    function handleActive() {
      const paragraphSkills = document.querySelector('.skills_paragraphSkillTech');
      const paragraphWorking = document.querySelector('.skills_paragraphWorking');
      const skillBars = document.querySelector('.skills_skillBars');
      const skillsDiv = document.querySelector('.skills_list');
      const scrollBottomTop = (window.scrollY + window.innerHeight) - skillsDiv.offsetHeight / 2;
      const isHalfShown = scrollBottomTop > skillsDiv.offsetTop;      

      if (isHalfShown) {
        paragraphSkills.classList.add('transition1');
        paragraphWorking.classList.add('transition2');
        skillBars.classList.add('transition3');
      }
    }

    window.addEventListener('scroll', debounce(handleActive));
  }, []);
  
  return (
      <section id="skills">
        <div className="skills_list">
            <h1 className="skills_header">
                <p className="skills_paragraphSkillTech">Skills and technologies</p>
                <p className="skills_paragraphWorking">Currently working with</p>
            </h1>
            <div className="skills_skillBars">
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