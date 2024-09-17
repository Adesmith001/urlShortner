import styles from "./Statistics.module.css";
import brandIcon from '../../assets/icon-brand-recognition.svg'
import detailIcon from '../../assets/icon-detailed-records.svg'
import fullyIcon from '../../assets/icon-fully-customizable.svg'

const Statistics = () => {
    return (
        <div className={styles.StatisticsMainContainer}>

            <div className={styles.TittleContainer}>
                <h2>Advanced Statistics</h2>
                <p>
                Track how your links are performing across the web with our advanced
                statistics dashboard.
                </p>
            </div>


            <div className={styles.BoxesContainer}>

                <div className={styles.Box1}>
                    <div className={styles.IconContainer}>
                        <img src={brandIcon} alt="" />
                    </div>
                    <h3>Brand Recognition</h3>
                    <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                </div>

                <div className={styles.Line}></div>

                <div className={styles.Box2}>
                    <div className={styles.IconContainer}>
                        <img src={detailIcon} alt="" />
                    </div>
                    <h3>Detailed Records</h3>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                
                <div className={styles.Box3}>
                    <div className={styles.IconContainer}>
                        <img src={fullyIcon} alt="" />
                    </div>
                    <h3>Fully Customizable</h3>
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
