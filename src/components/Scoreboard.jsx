import styles from "./ScoreBoard.module.css"
import { useSelector } from 'react-redux'
import { Player } from "@lordicon/react"
import { useRef, useState } from "react"
import FEMALE_ICON from "../assets/female.json"
import MALE_ICON from "../assets/male.json"
import COMPUTER_ICON from "../assets/computer.json"
import { useEffect } from "react"

const Scoreboard = () => {

    const [userIconState, setUserIconState] = useState("")
    const [computerIconState, setComputerIconState] = useState("")

    const playerRef1 = useRef()
    const playerRef2 = useRef()

    const computerScore = useSelector((state) => state.game.computerScore)
    const userScore = useSelector((state) => state.game.userScore)
    const currentWinner = useSelector((state) => state.game.currentWinner)
    const totalGamesPlayed = useSelector((state) => state.game.totalGamesPlayed)
    const totalMatchesDrawn = useSelector((state) => state.game.totalMatchesDrawn)
    const currentTime = useSelector((state) => state.game.currentTime)
    const username = useSelector((state) => state.game.username)
    const userAvatar = useSelector((state) => state.game.userAvatar)


    let userWinPercentage = (totalGamesPlayed - totalMatchesDrawn) == 0 ? "0%" : ((userScore / (totalGamesPlayed - totalMatchesDrawn)) * 100).toFixed(1) + "%"
    let computerWinPercentage = (totalGamesPlayed - totalMatchesDrawn) == 0 ? "0%" : ((computerScore / (totalGamesPlayed - totalMatchesDrawn)) * 100).toFixed(1) + "%"


    useEffect(() => {
        if (userIconState !== "hover-wave" || userIconState !== "hover-jump") {
            let random = Math.random()
            if (random < 0.5) {
                setUserIconState("hover-wave")
            }
            else {
                setUserIconState("hover-jump")
            }
        }
        if (computerIconState !== "hover-angle") {
            setComputerIconState("hover-angle")
        }
        setTimeout(() => {
            if (currentWinner == "u") {
                playerRef1.current?.playFromBeginning()
            }
            if (currentWinner == "c") {
                playerRef2.current?.playFromBeginning()
            }
        }, 0);
    }, [currentTime])


    useEffect(() => {
        setUserIconState("in-reveal")
        setComputerIconState("in-reveal")
        setTimeout(() => {
            playerRef1.current?.playFromBeginning()
            playerRef2.current?.playFromBeginning()
        }, 0);
    }, [])

    useEffect(() => {
        setUserIconState("in-reveal")
        setTimeout(() => {
            playerRef1.current?.playFromBeginning()
        }, 0);
    }, [userAvatar])

 
    return (
        <div className={styles.mainContainer}>
            <div className={styles.nameContainer}>
                <div className={styles.username}>
                    {username == "" ? "YOU" : username}
                </div>
                <div>
                    vs
                </div>
                {/* <div className={styles.center}></div> */}
                <div className={styles.computer}>
                    COMPUTER
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.left}>

                    <div className={styles.userScore}>
                        {userScore}
                    </div>

                    <div className={styles.userIconContainer}
                        onMouseEnter={() => {
                            if (userIconState !== "hover-glance") {
                                setUserIconState("hover-glance")
                            }
                            playerRef1.current?.playFromBeginning()
                        }}
                        onClick={() => {
                            if (userIconState !== "hover-glance") {
                                setUserIconState("hover-glance")
                            }
                            playerRef1.current?.playFromBeginning()
                        }}
                    >
                        <Player
                            ref={playerRef1}
                            icon={userAvatar == "female" ? FEMALE_ICON : MALE_ICON}
                            // colors='primary:cyan,secondary:pink'
                            colors='primary:white,secondary:cyan'
                            // trigger="none"
                            state={userIconState}
                            // size={"50px"}
                            size={`var(--player-size)`}
                        />
                    </div>


                </div>
                <div className={styles.center}></div>
                <div className={styles.right}>


                    <div className={styles.computerIconContainer}

                        onMouseEnter={() => {
                            if (computerIconState !== "hover-angle") {
                                setComputerIconState("hover-angle")
                            }
                            setTimeout(() => {
                                playerRef2.current?.playFromBeginning()
                            }, 0);
                        }}
                        onClick={() => {
                            if (computerIconState !== "hover-angle") {
                                setComputerIconState("hover-angle")
                            }
                            playerRef2.current?.playFromBeginning()
                        }}

                    >
                        <Player
                            ref={playerRef2}
                            icon={COMPUTER_ICON}
                            // colors='primary:pink,secondary:cyan'
                            colors='primary:white,secondary:cyan' 
                            // trigger="none"
                            state={computerIconState}
                            size={`var(--player-size)`}
                        />
                    </div>

                    <div className={styles.computerScore}>
                        {computerScore}
                    </div>

                </div>
            </div>

            <div className={styles.percentagesBox}>
                <div>
                    <div className={styles.userWinPercent}>
                        {userWinPercentage}
                    </div>
                    <div className={styles.userWinPercentMeterBox}>
                        <div className={styles.userWinPercentMeter} style={{ width: userWinPercentage }}>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.computerWinPercent}>
                        {computerWinPercentage}
                    </div>
                    <div className={styles.computerWinPercentMeterBox}>
                        <div className={styles.computerWinPercentMeter} style={{ width: computerWinPercentage }}>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Scoreboard