import OrgInfo from "../micro-components/orgInfo/OrgInfo.jsx";
import saranAuraImage from '../../assets/images/org/saran-aura.png';

function Education(){
    const eduData = [
        {
            timeline: "April 2021 - July 2025",
            orgName: "Himalaya Darshan College (T.U. Affiliated)",
            workType: "",
            role: "Bachelors of Information Management (BIM)",
            image: saranAuraImage,
            works: [
                "Learnt Web Development - Frontend: HTML, CSS, JS and Backend: PHP and Java.",
                "C and Java programming language.",
                "Gained Management Skills",
                "Knowledge of Computer Networking, Cyber Ethics, and more.",
            ],
        },
    ];

    return(
        <>
        {eduData.map((item, index) => (
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

export default Education;