import styles from './Button.module.css'
//* в данном случае модул используется как уникальный класс который будет применяться к элементам и т.к обе эти кнопки 
//* хоть и разные но они оба иходят от одного и того же копанента из-за этого у них всегда будет одинаковый модуль класса
const Button = (isPrimary) => {
    return(
        <>
        //* пример комбинирования классов в модулях
        <button className={`${styles.button} ${isPrimary ? styles.primary : ''}`}>Нажми меня</button>
        <button className={styles.button}>Нажми меня 2</button>
        </>
    )
}

export default Button;