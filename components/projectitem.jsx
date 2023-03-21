import Image from "next/image";
import Link from "next/link";
import styles from "./projectitem.module.css";

const ProjectItem = ({ text, href, img, height = 400, width = 400 }) => {
    return (
        <Link href={href}>
            <div className={styles.projectitem}>
                <Image src={img} height={height} width={width}></Image>
                <p>{text}</p>
            </div>
        </Link>
    );
};

export default ProjectItem;