import React from "react";
// import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects[0]);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      {projects.map((project)=>{
        return <div id="project-list" key={project.id}>
            <span>{project.name}</span>
            <span>{project.abot}</span>
            <span>{project.technologies}</span>
          </div>
      })}
      
    </div>
  );
}

export default ProjectList;
