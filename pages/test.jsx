import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import TopNavBar from '../components/topnavbar';
import utilStyles from '../styles/utils.module.css';
import ProjectItem from '../components/projectitem';
import Footer from '../components/footer';

import imgTest from "../images/DT1567.jpg"
import imgVenus from "../images/IMG-20230227-WA0006.jpg"
import imgBuho from "../images/IMG_20221016_213159.jpg"
import imgGuepardo from "../images/guepardo.jpg"
import imgDragon from "../images/dragon.jpg"

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
          <div className={utilStyles.colorfulShadow}><ProjectItem text="Venus in diabolous" href="https://www.netflix.com/browse"  img={imgVenus} ></ProjectItem></div>
          <ProjectItem text="Mirada del bosque" href="https://es.hboespana.com/" img={imgBuho} height={500} ></ProjectItem>
          <ProjectItem text="Mirada de la sabana" href="https://www.primevideo.com/" img={imgGuepardo} height={650} ></ProjectItem>
          <ProjectItem text="Fusfus dracónico" href="https://open.spotify.com/" img={imgDragon} height={650} ></ProjectItem>
        </section>
      </Layout>
      <Footer></Footer>
    </>
  );
}