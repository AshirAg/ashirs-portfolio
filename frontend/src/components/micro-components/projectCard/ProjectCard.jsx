import styles from "./ProjectCard.module.css";
import Tag from "../tag/Tag.jsx";
import Button from "../button/Button.jsx";
import { LuLink } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";

function ProjectCard({
  tag_name,
  image,
  project_name,
  project_description,
  stacks,
  buttons = [],
}) {
  return (
    <div className={styles.project_card}>
      <div className={styles.img_section}>
        <div className={styles.img_container}>
          <div className={styles.tag}>
            <p className={styles.tag_name}>{tag_name}</p>
          </div>
          <img src={image} alt={project_name} width={400} />
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.info}>
          <h3 className={styles.project_name}>{project_name}</h3>
          <p className={styles.description}>{project_description}</p>
        </div>
        <div className={styles.stacks}>
          {stacks.map((item, idx) => (
            <Tag key={idx}>{item}</Tag>
          ))}
        </div>
        <div className={styles.buttons}>
          {buttons.map((item, idx) => (
            <Button
              className="button_secondary sm"
              icon={
                item.label === "Open Source" ? (
                  <LuGithub />
                ) : item.label === "Visit Site" ? (
                  <LuLink />
                ) : null
              }
              key={idx}
              href={item.href}
              target={item.target}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
