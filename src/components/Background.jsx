import styles from "./Background.module.css"
import BG from "/bg.svg"

const Background = () => {
    return (
        <>
            <img src={BG} alt="" className={styles.container}/>
            <div className={styles.linearGradient}>
            </div>
        </>
    )
}

export default Background

