import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title {id}</span>
                    <p>Hello this is paragraph</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Jack Pritom Soren</div>
                    <div>2nd May , 11 am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails