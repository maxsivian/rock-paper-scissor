import styles from "./About.module.css"
import { useDispatch } from "react-redux"
import { setRouteLoading } from "../redux/routeSlice"
import { useEffect } from "react"


const About = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setRouteLoading(false))
  }, [dispatch])

  return (
    <div className={styles.container}>
      <div>
        Note: zoom in/out the app for better results
      </div>

      <div className={styles.about}>
        <span>
          Designed By
        </span>
        <span>
          <a href="https://www.maxsivian.com" target="_blank">MAXSIVIAN (maxsivian.com)</a>
        </span>
      </div>
      {/* <div className={styles.logoImageContainer}>
        <img src="./logo.jpg" alt="" className={styles.logo} />
      </div> */}
    </div>
  )
}

export default About