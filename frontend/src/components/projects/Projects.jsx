import { NavLink } from 'react-router-dom';
import styles from './Projects.module.css'
import ProjectsContainer from '../projectsContainer/ProjectsContainer.jsx';

function Projects(){
    return(
        <div className="section">
            <div className={`container ${styles.projects_container}`}>
                <div className={styles.heading}>
                    <h2>Projects</h2>
                    <NavLink to="/projects">
                        see more
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path d="M5 12h14M13 5l7 7-7 7"/>
                        </svg>


                    </NavLink>
                </div>
                <ProjectsContainer limit={2} />
            </div>
        </div>
    )
}

export default Projects;