import ProjectCard from "../micro-components/projectCard/ProjectCard";
import styles from "./ProjectsContainer.module.css";
import jewelryEcommProjectImage from "../../assets/images/projects/jewelry-ecomm.webp";
import hyropowerProjectImage from "../../assets/images/projects/hydropower.webp";
import multiVendorEcommProjectImage from "../../assets/images/projects/multi-vendor-ecomm.webp";
import gymWebsite from "../../assets/images/projects/gym-website.webp";

function ProjectsContainer({ limit }) {
  const projectData = [
    {
      tag_name: "solo",
      image: gymWebsite,
      project_name: "Gym website",
      project_description:
        "Modern and sleek designed website for gym with booking class and other general pages.",
      stacks: ["React", "Tailwind", "Radix UI", "TypeScript"],
      buttons: [
        {
          label: "Demo",
          href: "https://gym-website-topaz-eight.vercel.app/",
          target: "_blank",
        },
        // {
        //   label: "Open Source",
        //   href: "https://github.com/AshirAg/gym-website",
        //   target: "_blank",
        // },
      ],
    },
    {
      tag_name: "solo",
      image: jewelryEcommProjectImage,
      project_name: "Jewelry eCommerce",
      project_description:
        "Fully functional jewelry eCommerce website with CMS, integrated payments and an admin dashboard.",
      stacks: [
        "MySQL",
        "PHP",
        "JavaScript",
        "Figma",
        "CSS",
        "Bootstrap",
        "HTML",
      ],
      buttons: [
        {
          label: "Coming soon ...",
        },
      ],
    },
    {
      tag_name: "collaborative",
      image: hyropowerProjectImage,
      project_name: "Hydropower Website",
      project_description:
        "Dynamic web application with CMS and SEO Optimization.",
      stacks: [
        "MySQL",
        "PHP",
        "JavaScript",
        "Figma",
        "CSS",
        "Bootstrap",
        "HTML",
      ],
      buttons: [
        {
          label: "Visit Site",
          href: "https://www.panchkhapanhydropower.com/",
          target: "_blank",
        },
      ],
    },
    {
      tag_name: "collaborative",
      image: multiVendorEcommProjectImage,
      project_name: "Multi Vendor eCommerce",
      project_description:
        "Ecommerce with multiple buyers and sellers, dynamic multi role admin panel.",
      stacks: [
        "MySQL",
        "PHP",
        "JavaScript",
        "Figma",
        "CSS",
        "Bootstrap",
        "HTML",
      ],
      buttons: [
        {
          label: "Coming soon ...",
        },
      ],
    },
  ];

  const projectLimit = limit ? projectData.slice(0, limit) : projectData;

  return (
    <div className={styles.project_container}>
      {projectLimit.map((item, index) => (
        <ProjectCard
          key={index}
          image={item.image}
          project_name={item.project_name}
          tag_name={item.tag_name}
          project_description={item.project_description}
          stacks={item.stacks}
          buttons={item.buttons}
        />
      ))}
    </div>
  );
}

export default ProjectsContainer;
