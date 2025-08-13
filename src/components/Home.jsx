import styles from "./Home.module.css"
import Scoreboard from './Scoreboard'
import UserInput from './UserInput'
import CurrentStatus from './CurrentStatus'
import Feed from './Feed'

import { useDispatch } from "react-redux"
import { setRouteLoading } from "../redux/routeSlice"
import { useEffect } from "react"

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setRouteLoading(false))
    }, [dispatch])

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.ScoreboardContainer}>
                    <Scoreboard />
                </div>
                <div className={styles.FeedContainer}>
                    <Feed />
                </div>
                <div className={styles.UserInputContainer}>
                    <UserInput />
                </div>
            </div>
            <div className={styles.CurrentStatusContainer}>
                <CurrentStatus />
            </div>
        </div>
    )
}

export default Home