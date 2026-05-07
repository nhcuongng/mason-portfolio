import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Icon } from '../icons';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      display: flex;
      align-items: center;

      svg {
        display: inline-block;
        margin-right: 6px;
        width: 12px;
        height: 12px;
        color: var(--green);
        flex-shrink: 0;
      }

      /* &:before {
        content: '';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      } */
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(40%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Frontend: React, Angular, TypeScript, Rxjs.', 'Backend: Node.js.'];

  const devopsSkill = [
    'Web Server: Nginx (Reverse Proxy), PM2',
    'CI/CD: GitHub Actions, GitLab CI',
    'Containerization: Docker & Docker Compose',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! <b>My name is Mason Nguyen</b>. I’m a developer who loves building scalable,
              user-centric web applications. My journey into the world of code began in 2020, and
              since then, I’ve focused on creating maintainable systems through the effective
              application of <b>Design Patterns</b> and <b>SOLID principles</b>
            </p>

            <p>
              I thrive at the intersection of clean architecture and modern frontend technologies.
              Here’s what I’ve been working with recently:
            </p>

            <p>Languages & Frameworks:</p>
          </div>

          <p>
            <ul className="skills-list">
              {skills &&
                skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <Icon name="Code" />
                    <span>{skill}</span>
                  </li>
                ))}
            </ul>
          </p>
          <p></p>

          <p>DevOps & Tools:</p>
          <ul className="skills-list">
            {devopsSkill &&
              devopsSkill.map((skill, i) => (
                <li key={i} className="skill-item">
                  <Icon name="Code" />
                  <span>{skill}</span>
                </li>
              ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
