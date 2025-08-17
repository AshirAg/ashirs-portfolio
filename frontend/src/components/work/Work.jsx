import OrgInfo from "../micro-components/orgInfo/OrgInfo.jsx";
import saranAuraImage from '../../assets/images/org/saran-aura.png';
import passionChasersImage from '../../assets/images/org/passion-chasers.png';

function Work(){
    const workData = [
        {
            timeline: "June 2025 - Present",
            orgName: "Saran Aura",
            workType: "Contract",
            role: "Project Manager / Full-Stack Web Developer",
            image: saranAuraImage,
            works: [
                "Planned & Designed system architecture, user flow and database structure.",
                "Designed UI/UX tailored to client’s need.",
                "Developing Full-Stack web application (Frontend + Backend).",
                // "Performed testing and successfully launched the site.",
            ],
        },
        {
            timeline: "Oct 2024 - Apr 2025",
            orgName: "Passion Chasers",
            workType: "Intern",
            role: "Junior Full-Stack Web Developer",
            image: passionChasersImage,
            works: [
                "Developed the admin dashboard for hydropower website to manage website CMS.",
                "Redesigned frontend of Hydropower website.",
                "Redesigned and developed the company’s website with admin dashboard.",
                "Managed & Hosted various websites.",
                "Worked collaboratively.",
            ],
        },
    ];

    return(
        <>
        {workData.map((item, index) => (
        <OrgInfo 
            key={index}
            timeline={item.timeline}
            orgName={item.orgName}
            workType={item.workType}
            role={item.role}
            image={item.image}
            works={item.works}
        />
        ))}
        </>
    )
}

export default Work;