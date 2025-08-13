import styles from "./CurrentStatus.module.css"
import { useSelector } from "react-redux"
import { winner } from "../scripts/config"


const CurrentStatus = () => {

    const currentWinner = useSelector((state) => state.game.currentWinner)
    const totalGamesPlayed = useSelector((state) => state.game.totalGamesPlayed)
    const totalMatchesDrawn = useSelector((state) => state.game.totalMatchesDrawn)
    const userWinStreak = useSelector((state) => state.game.userWinStreak)
    const computerWinStreak = useSelector((state) => state.game.computerWinStreak)
    const drawStreak = useSelector((state) => state.game.drawStreak)

    return (
        <div className={styles.container}>
            <h2>
                Current Stats
            </h2>
            <div className={styles.item}>
                <div>
                    Total Games Played:
                </div>
                <div>
                    {totalGamesPlayed}
                </div>
            </div>
            <div className={styles.item}>
                <div>
                    Total Games Drawn:
                </div>
                <div>
                    {totalMatchesDrawn} ({totalGamesPlayed == 0 ? "0%" : (totalMatchesDrawn / totalGamesPlayed * 100).toFixed(1) + "%"})
                </div>
            </div>
            <div className={styles.item}>
                <div>
                    Current Winner:
                </div>
                <div className={`${currentWinner == "d" ?"": currentWinner == "u"? styles.user : styles.computer}`}>
                    {winner[currentWinner]}
                </div>
            </div>
            <div className={styles.item}>
                <div>
                    Your Win Streak:
                </div>
                <div className={styles.user}>
                    x{userWinStreak}
                </div>
            </div>
            <div className={styles.item}>
                <div>
                    Computer's Win Streak:
                </div>
                <div className={styles.computer}>
                    x{computerWinStreak}
                </div>
            </div>
             <div className={styles.item}>
                <div>
                    Draw Streak:
                </div>
                <div>
                    x{drawStreak}
                </div>
            </div>
        </div>
    )
}

export default CurrentStatus