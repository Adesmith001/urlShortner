import styles from './Footer.module.css'
// import Shortly from '../../assets/logo.svg'
import FacebookIcon from '../../assets/icon-facebook.svg'
import TwitterIcon from '../../assets/icon-twitter.svg'
import PinterestIcon from '../../assets/icon-pinterest.svg'
import InstagramIcon from '../../assets/icon-instagram.svg'


const Footer = () => {
    return (
        <div className={styles.FooterMainContainer}>

            <h2>Shortly</h2>

            <div className={styles.FooterTextMainContainer}>
                <div className={styles.Text}>
                    <div className={styles.FeaturesContainer}>
                        <h3>Features</h3>
                        <a href="https://urlshortner-theta.vercel.app/">Link Shortening</a>
                        <a href="">Branded Links</a>
                        <a href="">Analytics</a>
                    </div>

                    <div className={styles.FeaturesContainer}>
                        <h3>Resources</h3>
                        <a href="">Blog</a>
                        <a href="">Developers</a>
                        <a href="">Support</a>
                    </div>

                    <div className={styles.FeaturesContainer}>
                        <h3>Company</h3>
                        <a href="">About</a>
                        <a href="">Our Team</a>
                        <a href="">Careers</a>
                        <a href="">Contact</a>
                    </div>
                </div>

                <div className={styles.SocialMediaContainer}>
                    <a href="">
                        <img src={FacebookIcon} alt="" />
                    </a>

                    <a href="">
                        <img src={TwitterIcon} alt="" />
                    </a>

                    <a href="">
                        <img src={PinterestIcon} alt="" />
                    </a>

                    <a href="">
                        <img src={InstagramIcon} alt="" />
                    </a>

                </div>
            </div>

        </div>
    )
}

export default Footer