import Link from 'next/link';
import Image from 'next/image';

import styles from './Card.module.css';

const Card = (props) => {
  return (
    <Link href={props.href}>
      <a className={styles.cardLink}>
        <div className={styles.container}>
          <figure>
            <Image
              alt={props.name}
              className={styles.cardImage}
              src={props.imageSrc}
              width={260}
              height={160}
            />
          </figure>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{props.name}</h2>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
