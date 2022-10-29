import Head from 'next/head';
import Layout, { siteTitle } from './components/layout';
import TopNavBar from './components/topnavbar';
import utilStyles from '../styles/utils.module.css';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <TopNavBar></TopNavBar>
      <Layout home>

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
      </Layout>
      <Footer></Footer>
    </>
  );
}

