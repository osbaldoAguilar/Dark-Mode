import CreateForm from "../components/CreateForm"
import styles from '../styles/Home.module.scss'
export default function create() {
  return (
    <div>
      <h2 className={styles.title}>Fill out the form to create your Resume!!</h2>
      <CreateForm/>
    </div>
  )
}

