import styles from './Summary.module.css'

export function Summary(){
    return(
        <main className={styles.summary}>
         <div>
            <header>
                <p>Entradas</p>
               <img src='money-check-dollar.svg'/>
            </header>
            <strong>$20.000</strong>
         </div>

         <div>
            <header>
                <p>Saída</p>
               <img src='circle-right.svg'/>
            </header>
            <strong>$20.000</strong>
         </div>

         <div id='tt'>
            <header>
                <p>Total</p>
               <img src='circle-play.svg'/>
            </header>
            <strong>$00.000</strong>
         </div>
        </main>
    )
}