import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Footer from '../../components/footer';
import ImageRow from '../../components/imagerow';
import Layout from '../../components/layout';
import TopNavBar from '../../components/topnavbar';
import imgVenus from "../../images/IMG-20230227-WA0006.jpg";

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
            ])),
        },
    }
}


export default function Project_page_template() {
    const { t } = useTranslation('common')
    return (
        <>
            <div><TopNavBar></TopNavBar></div>
            <Layout project_page_template>
                <Head>
                    <title>{t('project_title_venus')}</title>
                </Head>

                <div>
                    <ImageRow images={[{ src: imgVenus }, { src: imgVenus }]} name={t('project_title_venus')} description={t('project_description_venus')} year='2023' tecnhique='to_change'></ImageRow>
                </div>
            </Layout>
            <Footer></Footer>
        </>
    );
}