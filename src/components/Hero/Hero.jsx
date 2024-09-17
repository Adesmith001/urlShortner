import styles from './Hero.module.css'
import Illustration from '../../assets/illustration-working.svg'

const Hero = () => {
    return (
        <div className={styles.HeroMainContainer}>
            <div className={styles.HeroImageContainer}>
                <img src={Illustration} alt="" />
            </div>


            <div className={styles.HeroTextContainer}>
                <h1>More than just shorter links</h1>
                <p>Build your brand’s recognition and get detailed insights on how your
                links are performing.</p>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default Hero