import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import TopNavBar from '../components/topnavbar';
import utilStyles from '../styles/utils.module.css';
import ProjectItem from '../components/projectitem';
import Footer from '../components/footer';

export default function Test() {
  return (
    <>
      <div><TopNavBar></TopNavBar></div>
      <Layout test>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className={utilStyles.headingMd}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie at elementum eu facilisis sed. Elit ut aliquam purus sit amet luctus venenatis
          </p>
        </section>
        <section className={utilStyles.projectslist}>
          <div className={utilStyles.colorfulShadow}><ProjectItem text="Projecto I" href="https://www.netflix.com/browse" ></ProjectItem></div>
          <ProjectItem text="Projecto II" href="https://es.hboespana.com/" ></ProjectItem>
          <ProjectItem text="Projecto III" href="https://www.primevideo.com/" ></ProjectItem>
          <ProjectItem text="Projecto IV" href="https://open.spotify.com/" ></ProjectItem>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}