import Arrow from './Arrow'
import styles from "./Feed.module.css"
import { useSelector } from 'react-redux'
import { rps } from '../scripts/config'

const Feed = () => {

  const userChoice = useSelector((state)=>state.game.userChoice)
  const computerChoice = useSelector((state)=>state.game.computerChoice)
  const currentTime = useSelector((state)=>state.game.currentTime)
  const currentWinner = useSelector((state)=>state.game.currentWinner)

  return (
    <div className={styles.container}>
      <div className={styles.userChoice}>{rps[userChoice]}</div>
      {currentWinner == "u" && <Arrow direction='ltr' /> }
      {currentWinner == "c" && <Arrow direction='rtl' /> }
      {currentWinner == "d" && <Arrow direction='both' /> }
      <div className={styles.computerChoice}>{rps[computerChoice]}</div>
    </div>
  )
}

export default Feed