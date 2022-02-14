import Card from '../components/Card';
import Gallery from '../components/Gallery';
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

export default function Home() {
  return (
    <div className={styles.container}>
      <Gallery data={dogs} pathName='dog' title='Marketplace' />
    </div>
  );
}
