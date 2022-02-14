import styles from "./banner.module.css"

const Banner = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>DOGS</span>
                <span className={styles.title2}>DAO</span>
            </h1>
            <p className={styles.subTitle}> Non Fungible Dogs </p>
            <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button>
        </div>
    );
}

export default Banner;