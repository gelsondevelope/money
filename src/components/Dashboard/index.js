
import { Table } from '../Table'
import styles from './Dashboard.module.css'
import { Summary } from './Summary'

export function Dashboard(){
    return(
      <main className={styles.dash}>
      <Summary/>
        <Table/>
      </main>
    )
}