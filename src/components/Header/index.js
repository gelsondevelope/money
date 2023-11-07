 
 import styles from './Header.module.css' 
 export function Header(){
    return(
        <header  className={styles.header}>
            <nav>
      
        <a href='#'><img   src='gofore.svg' /><span> -Money</span></a>
            
                <button type="button">Nova Transação</button>
                </nav>

        </header>
    )
    
}