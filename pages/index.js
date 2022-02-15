import Head from 'next/head';
import Gallery from '../components/Gallery';
import Banner from '../components/Banner/banner.js';
import styles from '../styles/Home.module.css';

const dogs = [
  {
    id: 0,
    name: 'Pomeranian',
    imageSrc: '',
  },
  { id: 1, name: 'Bulldog', imageSrc: '' },
  { id: 2, name: 'Husky', imageSrc: '' },
  { id: 3, name: 'Poodle', imageSrc: '' },
  { id: 4, name: 'Shiba', imageSrc: '' },
];

const handleOnBannerBtnClick = () => {
  console.log('hi banner button');
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DogsDAO</title>
        <meta name='description' content='NFT Attached to your dog' />
        <link rel='icon' href='/favicon.ico' />
        <a href='https://www.flaticon.com/free-icons/dog' title='dog icons'>
          Dog icons created by AomAm - Flaticon
        </a>
      </Head>

      <main className={styles.main}>
        <Banner buttonText='Launch' handleOnClick={handleOnBannerBtnClick} />
      </main>

      <Gallery data={dogs} pathName='dog' title='Marketplace' />

      <footer className={styles.footer}></footer>
    </div>
  );
}
