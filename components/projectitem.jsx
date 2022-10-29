import Image from "next/image";
import Link from "next/link";
import styles from "./projectitem.module.css";

import imgTest from "../images/DT1567.jpg"

const ProjectItem = ({ text, href, img }) => {
    return (
        <Link href={href}>
        <div className={styles.projectitem}>
            <Image src={imgTest} height={400} width={400}></Image>
            <p>{text}</p>
        </div>
        </Link>
    );
};

export default ProjectItem;