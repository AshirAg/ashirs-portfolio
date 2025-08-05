import ProjectsContainer from "../components/projectsContainer/ProjectsContainer.jsx";
import styles from "./css/Projects.module.css";

function Projects(){
    return(
        <div className="section">
            <div className={`container ${styles.container}`}>
                <h1>Projects</h1>
                <ProjectsContainer />
            </div>
        </div>
    )
}

export default Projects;