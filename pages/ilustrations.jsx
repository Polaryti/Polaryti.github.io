import Head from 'next/head';
import Footer from '../components/footer';
import Layout from '../components/layout';
import ProjectItem from '../components/projectitem';
import TopNavBar from '../components/topnavbar';
import utilStyles from '../styles/utils.module.css';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import imgDragon from "../images/dragon.jpg";


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}

export default function Projects() {
  const { t } = useTranslation('common')

  return (
    <>
      <div><TopNavBar></TopNavBar></div>
      <Layout projects>
        <Head>
          <title>{t('pages_ilustrations')}</title>
        </Head>

        <section className={utilStyles.projectslist}>
          <ProjectItem text={t('project_title_dragon')} href="/ilustrations/ilustration_page_template" img={imgDragon} ></ProjectItem>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}