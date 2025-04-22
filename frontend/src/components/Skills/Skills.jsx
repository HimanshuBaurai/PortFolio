import React, { useState } from 'react';
import './Skills.scss';
import { useInView } from 'react-intersection-observer';
import SEO from '../SEO.jsx'; // Adjust the path based on your file structure

const SkillCategory = ({ title, skills, isInView }) => {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            level={skill.level}
            icon={skill.icon}
            color={skill.color}
            delay={index * 0.1}
            isInView={isInView}
          />
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ name, level, icon, color, delay, isInView }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`skill-card ${isInView ? 'animate' : ''}`}
      style={{
        animationDelay: `${delay}s`,
        borderColor: hover ? color : 'transparent'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="skill-icon" style={{ color: color }}>
        <i className={icon}></i>
      </div>
      <h4>{name}</h4>
      <div className="skill-level">
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{
              width: isInView ? `${level}%` : '0%',
              backgroundColor: color,
              transition: `width 1s ease-out ${delay + 0.3}s`
            }}
          ></div>
        </div>
        <span className="level-text">{level}%</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML", level: 90, icon: "fab fa-html5", color: "#E44D26" },
        { name: "CSS", level: 85, icon: "fab fa-css3-alt", color: "#264DE4" },
        { name: "JavaScript", level: 80, icon: "fab fa-js-square", color: "#F7DF1E" },
        { name: "React", level: 85, icon: "fab fa-react", color: "#61DAFB" },
        { name: "Redux", level: 75, icon: "fas fa-code", color: "#764ABC" },
        { name: "Chakra UI", level: 80, icon: "fas fa-palette", color: "#319795" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 80, icon: "fab fa-node-js", color: "#339933" },
        { name: "Express", level: 78, icon: "fas fa-server", color: "#000000" },
        { name: "MongoDB", level: 75, icon: "fas fa-database", color: "#47A248" },
        { name: "REST API", level: 85, icon: "fas fa-exchange-alt", color: "#FF5733" }
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Python", level: 85, icon: "fab fa-python", color: "#3776AB" },
        { name: "LangChain", level: 80, icon: "fas fa-link", color: "#00A67E" },
        { name: "LangGraph", level: 75, icon: "fas fa-project-diagram", color: "#FF6B6B" },
        { name: "Agentic AI", level: 82, icon: "fas fa-robot", color: "#6236FF" }
      ]
    },
    {
      category: "Programming & Tools",
      skills: [
        { name: "C++", level: 92, icon: "fas fa-code", color: "#00599C" },
        { name: "Git", level: 88, icon: "fab fa-git-alt", color: "#F05032" },
        { name: "Docker", level: 70, icon: "fab fa-docker", color: "#2496ED" },
        { name: "GitHub Actions", level: 75, icon: "fab fa-github", color: "#181717" }
      ]
    }
  ];

  // Create flattened skills array for structured data
  const allSkills = skillsData.flatMap(category => 
    category.skills.map(skill => ({
      name: skill.name,
      proficiencyLevel: skill.level
    }))
  );

  return (
    <>
      <SEO 
        title="Skills & Expertise | Himanshu Baurai - Full Stack & AI Developer"
        description="Explore Himanshu Baurai's technical skills in Frontend Development, Backend Development, AI & Machine Learning, and Programming Tools. Proficient in React, Node.js, Python, LangChain, and more."
        keywords="Himanshu Baurai Skills, Full Stack Development, MERN Stack, AI Development, LangChain, React, Node.js, C++, Python, Technical Skills"
        type="website"
      >
        {/* Skills-specific structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "Himanshu Baurai",
              "knowsAbout": allSkills.map(skill => skill.name),
              "hasSkill": allSkills.map(skill => ({
                "@type": "DefinedTerm",
                "name": skill.name,
                "description": `${skill.name} with ${skill.proficiencyLevel}% proficiency`
              }))
            },
            "about": {
              "@type": "Thing",
              "name": "Technical Skills",
              "description": "Technical skills and expertise of Himanshu Baurai in Frontend Development, Backend Development, AI & Machine Learning, and Programming Tools"
            }
          })}
        </script>
      </SEO>
      
      <section id="skills" className="skills-section" ref={ref}>
        <div className="section-title">
          <h2>Technical Skills</h2>
          <div className="underline"></div>
          <p>My technical toolkit and expertise</p>
        </div>

        <div className="skills-container">
          {skillsData.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.category}
              skills={category.skills}
              isInView={inView}
            />
          ))}
        </div>

        
      </section>
    </>
  );
};

export default Skills;