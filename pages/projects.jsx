import Head from 'next/head';
import Footer from '../components/footer';
import Layout from '../components/layout';
import ProjectItem from '../components/projectitem';
import TopNavBar from '../components/topnavbar';
import utilStyles from '../styles/utils.module.css';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import imgGuepardo from "../images/guepardo.jpg";
import imgVenus from "../images/IMG-20230227-WA0006.jpg";
import imgBuho from "../images/IMG_20221016_213159.jpg";


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
          <title>{t('pages_projects')}</title>
        </Head>

        <section className={utilStyles.projectslist}>
          <ProjectItem text={t('project_title_venus')} href="/projects/project_page_template" img={imgVenus} ></ProjectItem>
          <ProjectItem text={t('project_title_buho')} href="/projects/project_page_template" img={imgBuho} ></ProjectItem>
          <ProjectItem text={t('project_title_guepardo')} href="/projects/project_page_template" img={imgGuepardo} ></ProjectItem>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}