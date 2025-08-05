import OrgInfo from "../micro-components/orgInfo/OrgInfo.jsx";
import hdcImage from '../../assets/images/org/hdc.png';
import merrylandImage from '../../assets/images/org/merryland.png';

function Education(){
    const eduData = [
        {
            timeline: "Apr 2021 - July 2025",
            orgName: "Himalaya Darshan College",
            workType: "T.U. Affiliated",
            role: "Bachelors of Information Management (BIM)",
            image: hdcImage,
            works: [
                "Learnt Web Development - Frontend: HTML, CSS, JS and Backend: PHP and Java.",
                "C and Java programming language.",
                "Gained Management Skills",
                "Knowledge of Computer Networking, Cyber Ethics, and more.",
            ],
        },
        {
            timeline: "July 2018 - Nov 2020",
            orgName: "Merryland College",
            workType: "+2",
            role: "Management",
            image: merrylandImage,
            works: [
                "Economics and mathematics.",
                "Management.",
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