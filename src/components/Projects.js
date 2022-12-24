import React, { useEffect, useState } from "react";

function Projects(props) {
  const projects = props.projects;
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
      const projectsDiv = document.querySelector('.projects_list');
      const scrollBottomTop = (window.scrollY + window.innerHeight) - projectsDiv.offsetHeight / 2;
      const halfShown = scrollBottomTop > projectsDiv.offsetTop;
      setIsHalfShown(halfShown);
    }

    window.addEventListener('scroll', debounce(handleActive));
    return () => window.removeEventListener('scroll', handleActive);
  }, [setIsHalfShown]);

  return (
    <section id="projects">
      <div className="projects_list">
        <h1 className="projects_headerMain">
          <p className={`projects_paragraphMain ${isHalfShown ? 'transition1' : ''}`}>My Projects</p>
          <p className={`projects_paragraphBuilt ${isHalfShown ? 'transition2' : ''}`}>Stuff I've built so far</p>
        </h1>
        <div className={`projects_div ${isHalfShown ? 'transition3' : ''}`}>
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="projects_linkInfo"
            >
              <div className="projects_imgDiv">
                <img
                  alt="projectphotos"
                  className="project_images"
                  src={project.image}
                />
                </div>
                <div className="projects_hoverDivInfo">
                <h1 className="projects_projectHeaderInfo">
                  {project.title}
                </h1>
                <p className="projects_paragraphInfo">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;