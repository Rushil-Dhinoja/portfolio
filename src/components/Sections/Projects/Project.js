import React from "react"
import Chip from "../../Utils/Chip"
import ButtonSecondary from "../../Utils/ButtonSecondary"
const Project = ({ project }) => {
  return (
    <div className="bg-secondary border-radius-12 p-4 sm:p-6 md:p-10 lg:p-10 display-flex flex-column flex-column lg:flex-row ">
      <div className="lg:width-2-of-4 md:width-100 mr-0 lg:mr-12">
        <img src={project.img} alt={project.name} className="img" />
      </div>
      <div className="lg:width-2-of-4 md:mt-6 lg:mt-0 md:width-100 display-flex flex-column">
        <h3 className="font-h3 font-teal-500 roboto-regular">{project.name}</h3>
        <p className="font-body font-white roboto-regular line-height-5 mt-8">
          {project.description}
        </p>
        <div className="display-flex lg:justify-start sm:justify-start justify-start md:justify-center mt-4 md:spacing-x-1 spacing-x-2 flex-wrap mb-8 lg:mb-0 ">
          {project.tech.map((name, index) => {
            return <Chip key={index}>{name}</Chip>
          })}
        </div>
        <div className="display-flex lg:justify-start justify-center lg:flex-row md:flex-row md:spacing-y-2 sm:flex-column align-items-center sm:align-items-center flex-column spacing-x-2 md:spacing-x-0 mt-auto">
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
