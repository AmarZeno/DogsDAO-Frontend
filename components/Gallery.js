import Card from './Card';
import styles from '../styles/Layout.module.css';

const Gallery = (props) => {
  return (
    props.data.length > 0 && (
      <div className={styles.sectionWrapper}>
        <h3 className={styles.heading2}>{props.title}</h3>
        <div className={styles.cardLayout}>
          {props.data.map((d) => {
            return (
              <Card
                key={d.id}
                name={d.name}
                imageSrc={
                  d.imageSrc || 'https://cdn.dribbble.com/users/3390157/screenshots/6315498/1.png'
                }
                href={`/${props.pathName}/${d.id}`}
              />
            );
          })}
        </div>
      </div>
    )
  );
};

export default Gallery;
