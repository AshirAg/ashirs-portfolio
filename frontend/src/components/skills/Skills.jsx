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

function Skills() {
    const skills = [
        {
            image: pythonImg,
            title: 'Python',
            desc: 'Programming Language',
        },
        {
            image: javaImg,
            title: 'Java',
            desc: 'Programming Language',
        },
        {
            image: cImg,
            title: 'C',
            desc: 'Programming Language',
        },
        {
            image: figmaImg,
            title: 'Figma',
            desc: 'UI/UX Design Tool',
        },
        {
            image: gitImg,
            title: 'Git',
            desc: 'Version Control',
        },
        {
            image: mySqlImg,
            title: 'MySQL',
            desc: 'Database',
        },
        {
            image: sassImg,
            title: 'Sass',
            desc: 'CSS Extension',
        },
        {
            image: htmlImg,
            title: 'HTML5',
            desc: 'Markup language',
        },
        {
            image: cssImg,
            title: 'CSS',
            desc: 'Style Sheets',
        },
        {
            image: jsImg,
            title: 'JavaScript',
            desc: 'Scripting Language',
        },
        {
            image: reactImg,
            title: 'React',
            desc: 'JS FrontEnd Library',
        },
        {
            image: phpImg,
            title: 'PHP',
            desc: 'Fullstack/Backend',
        }
    ];

    return (
        <div className="section">
            <div className="container">
                <div className={styles.skills}>
                    {skills.map((skill, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.image_card}>
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
