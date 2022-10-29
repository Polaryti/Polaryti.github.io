import styles from "./footer.module.css";
import Link from "next/link";

const mario = "/"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Hecho por <Link href={mario}>Mario C. Mocholí</Link></p>
        </footer>
    );
};

export default Footer;