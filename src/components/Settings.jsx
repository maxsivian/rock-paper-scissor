import { useState, useRef, useEffect } from "react";
import styles from "./Settings.module.css";
import SettingsSVG from './SettingsSVG'
import { Player } from '@lordicon/react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { changeUsername } from "../redux/gameSlice";
import { changeUserAvatar } from "../redux/gameSlice";
import { resetScores } from "../redux/gameSlice";
import RESET_ICON from "../assets/reset.json";
import SAVE_ICON from "../assets/save.json";
import FEMALE_ICON from "../assets/female.json"
import MALE_ICON from "../assets/male.json"

import OverlayPortal from "./OverlayPortal"


const Settings = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isRendered, setIsRendered] = useState(false); // Controls actual DOM presence
    const [shouldAnimate, setShouldAnimate] = useState(false); // Controls animation timing

    const resetRef = useRef(null);
    const saveRef = useRef(null);
    const maleRef = useRef(null);
    const femaleRef = useRef(null);
    // const inputRef = useRef(null)

    // const usernameRef = useRef()
    const oldUsername = useSelector((state) => state.game.username)
    const [username, setUsername] = useState("")
    const userAvatar = useSelector((state) => state.game.userAvatar)
    const [avatar, setAvatar] = useState(userAvatar)

    const [resetIconState, setResetIconState] = useState("")
    const [saveIconState, setSaveIconState] = useState("")

    const dispatch = useDispatch();


    const handleClick = () => {
        if (isMenuVisible) {
            // Start fade-out animation, then remove from DOM
            setShouldAnimate(false);
            setTimeout(() => setIsRendered(false), 300);
        } else {
            // First, add to the DOM
            setIsRendered(true);

            // Delay animation slightly so it fades in smoothly
            setTimeout(() => setShouldAnimate(true), 10);
        }
        setIsMenuVisible(!isMenuVisible);
    };

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains(styles.overlay)) {
            handleClick()
        }
    };

    const handleCloseButton = (e) => {
        handleClick()
    };

    const handleSave = () => {
        dispatch(changeUsername(username));
        dispatch(changeUserAvatar(avatar))
        handleCloseButton()
    }

    const handleResetClick = () => {
        dispatch(resetScores())

        handleCloseButton()
    }

    useEffect(() => {
        // console.log('inputRef.current', inputRef.current);
        // console.log('oldUsername', oldUsername);
        // if (inputRef.current) {
        //     setTimeout(() => {
        //         inputRef.current.value = oldUsername
        //     }, 0);
        // }


        setResetIconState("in-reveal")
        setSaveIconState("in-reveal")
        setTimeout(() => {
            resetRef.current?.playFromBeginning()
            saveRef.current?.playFromBeginning()
        }, 0);
    }, [isRendered])

    useEffect(() => {
      setUsername(oldUsername)
    }, [oldUsername])
    


    return (
        <div className={styles.container}>
            <button onClick={handleClick} className={styles.button} tabIndex={-1}>
                <div className={styles.icon}>
                    <SettingsSVG />
                </div>
            </button>
            {isRendered && (

                <OverlayPortal>
                    <div
                        className={styles.overlay}
                        // className="overlay"
                        onClick={handleOutsideClick}>
                        <div className={`${styles.box} ${shouldAnimate ? styles.show : styles.hide}`}>
                            <button className={styles.closeButton} onClick={handleCloseButton}>
                                <img src="./close.svg" alt="" className={styles.closeSvg} />
                            </button>
                            <div>
                                <button
                                    onClick={handleResetClick}
                                    onMouseEnter={() => {
                                        if (resetIconState != "loop-cycle") {
                                            setResetIconState("loop-cycle")
                                        }
                                        resetRef.current?.playFromBeginning()
                                    }}>
                                    <span>Reset Scores</span>
                                    <span>
                                        <Player
                                            ref={resetRef}
                                            icon={RESET_ICON}
                                            colors='primary:#4F7FFF,secondary:#FF345A,tertiary:green'
                                            // state="loop-cycle"
                                            state={resetIconState}
                                        />
                                    </span>
                                </button>
                            </div>

                            <div className={styles.inputContainer}>
                                <input type="text" placeholder="your name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                // ref={usernameRef}
                                />
                            </div>

                            <div className={styles.avatarContainer}>
                                <div className={`${styles.avatarIconContainer} ${avatar == "female" ? styles.selectedAvatar : ""}`}
                                    // onMouseEnter={() => {
                                    //     femaleRef.current?.playFromBeginning()
                                    // }}
                                    onClick={() => {
                                        femaleRef.current?.playFromBeginning()
                                        setAvatar("female")
                                    }}
                                >
                                    <Player
                                        ref={femaleRef}
                                        icon={FEMALE_ICON}
                                        colors='primary:white,secondary:cyan'
                                        // trigger="none"
                                        state="hover-nodding"
                                        // size={"50px"}
                                        size={`var(--player-size)`}
                                    />
                                </div>
                                <div className={`${styles.avatarIconContainer} ${avatar == "male" ? styles.selectedAvatar : ""}`}
                                    // onMouseEnter={() => {
                                    //     maleRef.current?.playFromBeginning()
                                    // }}
                                    onClick={() => {
                                        maleRef.current?.playFromBeginning()
                                        setAvatar("male")
                                    }}
                                >
                                    <Player
                                        ref={maleRef}
                                        icon={MALE_ICON}
                                        colors='primary:white,secondary:cyan'
                                        // trigger="none"
                                        state="hover-nodding"
                                        // size={"50px"}
                                        size={`var(--player-size)`}
                                    />
                                </div>
                            </div>

                            <div >
                                <button
                                    onClick={handleSave}
                                    onMouseEnter={() => {
                                        if (saveIconState != "hover-flutter") {
                                            setSaveIconState("hover-flutter")
                                        }
                                        saveRef.current?.playFromBeginning()
                                    }}
                                >

                                    <span>
                                        Save
                                    </span>
                                    <span>
                                        <Player
                                            ref={saveRef}
                                            icon={SAVE_ICON}
                                            colors='primary:#4F7FFF,secondary:#FF345A,tertiary:green'
                                            // state="loop-cycle"
                                            state={saveIconState}
                                        />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </OverlayPortal>
            )}
        </div>
    );
};

export default Settings;
