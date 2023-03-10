import React, { useEffect, useState } from "react";

function About(props) {
  const images = props.socialImages[0];
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function handleActive() {
      setIsActive(!isActive);
    }
    window.addEventListener('load', handleActive);
    return () => window.removeEventListener('load', handleActive);
  }, [isActive, setIsActive]);

  return (
    <section id="about">
      <div className="about_info">
        <div className="about_divHeader">
          <h1 className="header about_header1">
            <p className={`paragraph title_paragraph ${isActive ? 'transition1' : ''}`}>Hi, I'm</p>
              <span className={`paragraph name_title ${isActive ? 'transition2' : ''}`}>
                <p className="paragraph name_paragraph">Dusan</p>
                <p className="paragraph titleAbout_paragraph">Web Developer</p>
              </span>
          </h1>
          <div className={`about_socialLinks ${isActive ? 'transition3' : ''}`}>
              <a
                href={images.githubLink}
                className="gitHub_link"
              >
                <img
                  alt="gitImage"
                  className="socialImage gitImage"
                  src={images.githubImage}
                />
              </a>
              <a
                href={images.linkedinLink}
                className="linkedin_link"
              >
                <img
                  alt="linkedinImage"
                  className="socialImage linkedinImage"
                  src={images.linkedinImage}
                />
              </a>
            <a
              href='#contact'
              key={images.mailImage}
              className="mail_link"
            >
              <img
                alt="mailImage"
                className="socialImage mailImage"
                src={images.mailImage}
              />
            </a>
          </div>         
        </div>
      </div>
    </section>
  );
}

export default About;