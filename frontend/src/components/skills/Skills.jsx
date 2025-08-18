import styles from './Skills.module.css';
import pythonImg from "../../assets/images/skills/python.webp"
import javaImg from "../../assets/images/skills/java.webp"
import cImg from "../../assets/images/skills/c.webp"
import figmaImg from "../../assets/images/skills/figma.webp"
import gitImg from "../../assets/images/skills/git.webp"
import mySqlImg from "../../assets/images/skills/mysql.webp"
import postgreSqlImg from "../../assets/images/skills/postgre.webp"
import sassImg from "../../assets/images/skills/sass.webp"
import htmlImg from "../../assets/images/skills/html.webp"
import cssImg from "../../assets/images/skills/css.webp"
import jsImg from "../../assets/images/skills/js.webp"
import reactImg from "../../assets/images/skills/react.webp"
import nextImg from "../../assets/images/skills/next.webp"
import phpImg from "../../assets/images/skills/php.webp"
import tailwindImg from "../../assets/images/skills/tailwind.webp"
import bootStrapImg from "../../assets/images/skills/bootstrap.webp"

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
            image: postgreSqlImg,
            title: 'PostgreSQL',
            desc: 'Database',
            ratings: 4,
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
            image: nextImg,
            title: 'Next.js',
            desc: 'React Framework',
            ratings: 5.5,
        },
        {
            image: phpImg,
            title: 'PHP',
            desc: 'Backend Language',
            ratings: 5.6,
        },
        {
            image: bootStrapImg,
            title: 'BootStrap',
            desc: 'CSS Framework',
            ratings: 1,
        },
        {
            image: tailwindImg,
            title: 'Tailwind',
            desc: 'CSS Framework',
            ratings: 1.1,
        },
    ];

    skills.sort((a,b) => b.ratings - a.ratings);

    return (
        <div className="section">
            <div className="container">
                <div className={styles.skills}>
                    {skills.map((skill, index) => (
                        <div key={index} className={styles.skill_card}>
                            <div className={styles.image_container}>
                                <img src={skill.image} alt={skill.title} className={styles.icon} width={100}/>
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
