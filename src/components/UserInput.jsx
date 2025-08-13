import styles from "./UserInput.module.css"
import { getUserInput } from '../redux/gameSlice'
import { useDispatch } from 'react-redux'
import { useRef } from "react";

import Lottie from 'lottie-react'
import ROCK_ICON from "../assets/rock.json"
import SCISSOR_ICON from "../assets/scissor.json"
import PAPER_ICON from "../assets/paper.json"


const UserInput = () => {
    const dispatch = useDispatch()
    const lottieRef1 = useRef();
    const lottieRef2 = useRef();
    const lottieRef3 = useRef();


    const handleClick = (v) => {
        dispatch(getUserInput(v))
        if (v == "r") {
            lottieRef1.current?.goToAndPlay(0, true)
        }
        else if (v == "p") {
            lottieRef2.current?.goToAndPlay(0, true)
        }
        else {
            lottieRef3.current?.goToAndPlay(0, true)
        }
    }

    return (
        <div className={styles.container}>
            <button className={styles.rockContainer} onClick={() => handleClick("r")}>
                <div>
                    ROCK
                </div>
                <div
                    className={styles.scissorIconContainer}
                    // onMouseEnter={() => lottieRef1.current?.goToAndPlay(0, true)}
                >
                    <Lottie
                        lottieRef={lottieRef1}
                        animationData={ROCK_ICON}
                        loop={false}
                        autoplay={false}
                        style={{ width: "var(--player-size)", height: "var(--player-size)" }}
                        className={styles.rockLottie}
                    />
                </div>
            </button>
            <button className={styles.paperContainer} onClick={() => handleClick("p")}>
                <div>
                    PAPER
                </div>
                <div
                    className={styles.scissorIconContainer}
                    // onMouseEnter={() => lottieRef2.current?.goToAndPlay(0, true)}
                >
                    <Lottie
                        lottieRef={lottieRef2}
                        animationData={PAPER_ICON}
                        loop={false}
                        autoplay={false}
                        style={{ width: "var(--player-size)", height: "var(--player-size)" }}
                        className={styles.paperLottie}
                    />
                </div>
            </button>
            <button className={styles.scissorContainer} onClick={() => handleClick("s")}>
                <div>
                    SCISSOR
                </div>
                <div
                    className={styles.scissorIconContainer}
                // onMouseEnter={() => lottieRef.current?.play()}
                // onMouseLeave={() => lottieRef.current?.stop()}
                // onMouseEnter={() => lottieRef3.current?.goToAndPlay(0, true)}
                >
                    <Lottie
                        lottieRef={lottieRef3}
                        animationData={SCISSOR_ICON}
                        loop={false}
                        autoplay={false}
                        style={{ width: "calc(1*var(--player-size))", height: "calc(1*var(--player-size))" }}
                        className={styles.scissorLottie}
                    />
                </div>
            </button>
        </div>
    )
}

export default UserInput







// Function	Description
// play()	Plays the animation from the current position to the end.
// stop()	Stops the animation and resets to the first frame.
// pause()	Pauses the animation at the current frame.
// setSpeed(speed)	Sets the speed (1 = normal, 2 = double, 0.5 = half speed, etc.).
// setDirection(direction)	Set the playback direction (1 = forward, -1 = reverse).
// goToAndStop(frame, isFrame)	Go to a specific frame and stop.
// goToAndPlay(frame, isFrame)	Go to a specific frame and play from there.
// playSegments([start, end])	Play specific segments of the animation (can also pass an array of pairs).
// destroy()	Cleans up and removes the animation instance.