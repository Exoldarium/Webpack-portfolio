import React, { useEffect, useState } from "react";

function Projects(props) {
  const projects = props.projects;
  useEffect(() => {
    function debounce(func, timeout = 20){
      let timer;
      return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
      };
    }

    function handleActive() {
      const paragraphMain = document.querySelector('.projects_paragraphMain');
      const paragraphBuilt = document.querySelector('.projects_paragraphBuilt');
      const imgDiv = document.querySelector('.projects_div');
      const projectsDiv = document.querySelector('.projects_list');
      const scrollBottomTop = (window.scrollY + window.innerHeight) - projectsDiv.offsetHeight / 2;
      const isHalfShown = scrollBottomTop > projectsDiv.offsetTop;
      
      if (isHalfShown) {
        paragraphMain.classList.add('transition1');
        paragraphBuilt.classList.add('transition2');
        imgDiv.classList.add('transition3')
      }
    }

    window.addEventListener('scroll', debounce(handleActive));
  }, []);

  return (
    <section id="projects">
      <div className="projects_list">
        <h1 className="projects_headerMain">
          <p className="projects_paragraphMain">My Projects</p>
          <p className="projects_paragraphBuilt">Stuff i've built so far</p>
        </h1>
        <div className="projects_div">
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