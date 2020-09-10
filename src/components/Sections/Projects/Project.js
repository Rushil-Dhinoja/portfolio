import React from "react"
import Chip from "../../Utils/Chip"
import ButtonSecondary from "../../Utils/ButtonSecondary"
const Project = ({ project }) => {
  return (
    <div className="bg-secondary border-radius-12 p-10 display-flex">
      <div className="width-2-of-4 mr-12">
        <img src={project.img} alt={project.name} />
      </div>
      <div className="width-2-of-4 display-flex flex-column">
        <h3 className="font-h3 font-teal-500 roboto-regular">{project.name}</h3>
        <p className="font-body font-white roboto-regular line-height-5 mt-8">
          {project.description}
        </p>
        <div className="display-flex mt-8 spacing-x-2 flex-wrap ">
          {project.tech.map((name, index) => {
            return <Chip key={index}>{name}</Chip>
          })}
        </div>
        <div className="display-flex spacing-x-2 mt-auto">
          <ButtonSecondary variant="solid" href={project.live}>
            visit
          </ButtonSecondary>
          <ButtonSecondary variant="outline" href={project.source}>
            source
          </ButtonSecondary>
        </div>
      </div>
    </div>
  )
}

export default Project
