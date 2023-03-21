import Image from 'next/image';
import styles from "./imagerow.module.css";
import { useTranslation } from 'next-i18next';

const ImageRow = ({ images, name, description, year, tecnhique }) => {
  const { t } = useTranslation('common')
  return (
    <>
      <div className={styles.imageRow}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
          />
        ))}
      </div>
      {/* <div className={styles.text}>
        <p> {t('project_description')}: &emsp; {description} </p>
        <p> {t('project_year')}: &emsp; {year} </p>
        <p> {t('project_tecnhique')}: &emsp; {tecnhique} </p>
      </div> */}

      <div className={styles.gridContainer}>
        <div className={styles.gridItem}><b>{t('project_name')}:</b></div>
        <div className={styles.gridItem}>{name}</div>
        <div className={styles.gridItem}><b>{t('project_description')}:</b></div>
        <div className={styles.gridItem}>{description}</div>
        <div className={styles.gridItem}><b>{t('project_year')}:</b></div>
        <div className={styles.gridItem}>{year}</div>
        <div className={styles.gridItem}><b>{t('project_tecnhique')}:</b></div>
        <div className={styles.gridItem}>{tecnhique}</div>
      </div>
    </>
  );
};

export default ImageRow;