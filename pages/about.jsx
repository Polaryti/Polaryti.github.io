import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer';
import Layout from '../components/layout';
import TopNavBar from '../components/topnavbar';
import imgPabloPrque from "../images/pablo-parque.jpg";


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
      <Layout about>

        <Head>
          <title>{t('pages_about')}</title>
        </Head>

        <Image src={imgPabloPrque} />
        <p> {t('about_description')} </p>

      </Layout>
      <Footer></Footer>
    </>
  );
}

