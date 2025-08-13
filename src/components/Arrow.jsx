import styles from "./Arrow.module.css"

const Arrow = ({ direction = "ltr" }) => {
    return (
        <>
            {
                direction == "ltr" && (
                    <div className={styles.container}>
                        <span className={`${styles.animate} ${styles.arrow1} ${styles.color1}`}>&gt;</span>
                        <span className={`${styles.animate} ${styles.arrow2} ${styles.color1}`}>&gt;</span>
                        <span className={`${styles.animate} ${styles.arrow3} ${styles.color1}`}>&gt;</span>
                        <span className={`${styles.animate} ${styles.arrow4} ${styles.color1}`}>&gt;</span>
                        <span className={`${styles.animate} ${styles.arrow5} ${styles.color1}`}>&gt;</span>
                        <span className={`${styles.animate} ${styles.arrow6} ${styles.color1}`}>&gt;</span>
                    </div>
                )
            }

            {
                direction == "rtl" && (
                    <div className={styles.container}>
                        <span className={`${styles.animate} ${styles.r_arrow1} ${styles.color2}`}>&lt;</span>
                        <span className={`${styles.animate} ${styles.r_arrow2} ${styles.color2}`}>&lt;</span>
                        <span className={`${styles.animate} ${styles.r_arrow3} ${styles.color2}`}>&lt;</span>
                        <span className={`${styles.animate} ${styles.r_arrow4} ${styles.color2}`}>&lt;</span>
                        <span className={`${styles.animate} ${styles.r_arrow5} ${styles.color2}`}>&lt;</span>
                        <span className={`${styles.animate} ${styles.r_arrow6} ${styles.color2}`}>&lt;</span>
                    </div>
                )
            }

               {
                direction == "both" && (
                    <div className={styles.container}>
                        <span className={`${styles.animate} ${styles.b_arrow1} ${styles.color1}`}>&gt;</span>
                        <span className={`${styles.animate} ${styles.b_arrow2} ${styles.color1}`}>&gt;</span>
                        <span className={`${styles.animate} ${styles.b_arrow3} ${styles.color1}`}>&gt;</span>
                        <span className={`${styles.animate} ${styles.b_arrow4} ${styles.color2}`}>&lt;</span>
                        <span className={`${styles.animate} ${styles.b_arrow5} ${styles.color2}`}>&lt;</span>
                        <span className={`${styles.animate} ${styles.b_arrow6} ${styles.color2}`}>&lt;</span>
                    </div>
                )
            }
        </>
    )
}

export default Arrow