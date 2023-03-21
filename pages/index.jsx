import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Footer from '../components/footer';
import TopNavBar from '../components/topnavbar';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}

export default function Home() {

  const { t } = useTranslation('common')

  return (
    <>
      <TopNavBar></TopNavBar>
      <Layout home>

        <Head>
          <title>{t('pages_home')}</title>
        </Head>

        <section className={utilStyles.headingMd}>
          <p>
            {t('home_description_principal')}
          </p>
          <p>
            {t('home_description_secundary')}
          </p>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}

