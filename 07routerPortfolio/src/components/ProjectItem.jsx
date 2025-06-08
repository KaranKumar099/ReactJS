import { useParams } from "react-router-dom"

function ProjectItem(){
    const {projectId}=useParams();
    return (
        <>
            <h1 className="text-3xl">Project No : {projectId}</h1>
        </>
    )
}

export default  ProjectItem