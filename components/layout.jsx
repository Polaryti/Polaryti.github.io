import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import imgFavicon from '../images/favicon.jpg';
import imgProfilePic from '../images/pablo.jpg';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';


export default function Layout({ children, home }) {
    const { t } = useTranslation('common')
    const router = useRouter();

    function handleClick() {
        router.back();
      }
    
    return (
        <div className={styles.container}>
            <Head>
                {/* <link rel="icon" href={imgFavicon} /> */}
                <meta
                    name="description"
                    content={t('layout_site_description')}
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        t('layout_site_title'),
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={t('layout_site_title')} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta lang="es"></meta>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src={imgProfilePic}
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt=""
                        />
                        <h1 className={utilStyles.heading2Xl}>{t('layout_name')}</h1>
                    </>
                ) : (
                    <>
                       
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome} >
                    <Link href='/'>
                        <a onClick={handleClick}>{t('layout_return')}</a>
                    </Link>
                </div>
            )}
        </div>
    );
}