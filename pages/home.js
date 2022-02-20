import Gallery from '../components/Gallery';
import Banner from '../components/Banner/banner.js';
import styles from '../styles/Layout.module.css';

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
      <main className={styles.main}>
        <Banner buttonText='Launch' handleOnClick={handleOnBannerBtnClick} />
      </main>
      <Gallery data={dogs} pathName='dog' title='Marketplace' />
    </div>
  );
}
