import { useTranslation } from 'next-i18next';
import Link from "next/link";
import styles from "./footer.module.css";

const author = "/"

const Footer = () => {
    const { t } = useTranslation('common')
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <p>{t('footer_about')} <Link href={author}>{t('footer_about_author')}</Link></p>
            </div>
        </footer>
    );
};

export default Footer;