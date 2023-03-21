import '../styles/global.css';
import { motion } from "framer-motion";
import { useRouter } from "next/router"; 
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  const router = useRouter(); 

  return (
    <motion.div
      key={router.route}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default appWithTranslation(MyApp);