import React from "react"
import HeadingTwo from "../../Utils/HeadingTwo"
import Project from "./Project"
import { data } from "../../../content/prjocets"

const Projects = () => {
  return (
    <div className="my-40" id="projects">
      <HeadingTwo>Projects</HeadingTwo>
      <div className="my-16 spacing-y-5">
        {data.map((project, index) => {
          return <Project project={project} key={index} />
        })}
      </div>
    </div>
  )
}

export default Projects
