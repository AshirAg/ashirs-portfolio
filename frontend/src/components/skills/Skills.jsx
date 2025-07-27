import styles from './Skills.module.css';
import pythonImg from "../../assets/images/python.png"
import javaImg from "../../assets/images/java.png"
import cImg from "../../assets/images/c.png"
import figmaImg from "../../assets/images/figma.png"
import gitImg from "../../assets/images/git.png"
import mySqlImg from "../../assets/images/mysql.png"
import sassImg from "../../assets/images/sass.png"
import htmlImg from "../../assets/images/html.png"
import cssImg from "../../assets/images/css.png"
import jsImg from "../../assets/images/js.png"
import reactImg from "../../assets/images/react.png"
import phpImg from "../../assets/images/php.png"
import bootStrapImg from "../../assets/images/bootstrap.png"

function Skills() {
    const skills = [
        {
            image: pythonImg,
            title: 'Python',
            desc: 'Programming Language',
            ratings: 3,
        },
        {
            image: javaImg,
            title: 'Java',
            desc: 'Programming Language',
            ratings: 3,
        },
        {
            image: cImg,
            title: 'C',
            desc: 'Programming Language',
            ratings: 3,
        },
        {
            image: figmaImg,
            title: 'Figma',
            desc: 'UI/UX Design Tool',
            ratings: 4,
        },
        {
            image: gitImg,
            title: 'Git',
            desc: 'Version Control',
            ratings: 2,
        },
        {
            image: mySqlImg,
            title: 'MySQL',
            desc: 'Database',
            ratings: 4,
        },
        {
            image: sassImg,
            title: 'Sass',
            desc: 'CSS Extension',
            ratings: 1,
        },
        {
            image: htmlImg,
            title: 'HTML5',
            desc: 'Markup language',
            ratings: 2,
        },
        {
            image: cssImg,
            title: 'CSS',
            desc: 'Style Sheets',
            ratings: 2,
        },
        {
            image: jsImg,
            title: 'JavaScript',
            desc: 'Scripting Language',
            ratings: 5,
        },
        {
            image: reactImg,
            title: 'React',
            desc: 'JS FrontEnd Library',
            ratings: 5.4,
        },
        {
            image: phpImg,
            title: 'PHP',
            desc: 'Fullstack/Backend',
            ratings: 5.5,
        },
        {
            image: bootStrapImg,
            title: 'BootStrap',
            desc: 'CSS Framework',
            ratings: 1,
        }
    ];

    skills.sort((a,b) => b.ratings - a.ratings);

    return (
        <div className="section">
            <div className="container">
                <div className={styles.skills}>
                    {skills.map((skill, index) => (
                        <div key={index} className={styles.skill_card}>
                            <div className={styles.image_container}>
                                <img src={skill.image} alt={skill.title} className={styles.icon} />
                            </div>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
