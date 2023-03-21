import Image from "next/image";
import Link from "next/link";
import styles from "./projectitem.module.css";

const ProjectItem = ({ text, href, img }) => {
    return (
        <Link href={href}>
            <div className={styles.projectitem}>
            <Image src={img} layout="responsive"></Image>
                <p>{text}</p>
            </div>
        </Link>
    );
};

export default ProjectItem;