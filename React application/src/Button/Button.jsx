import styles from './Button.module.css';

function Button() {

  function ClickMeButton(e) {
    if (e.target.textContent === 'Click me!') {
      e.target.textContent = 'Now Clicked!';
    } else {
      e.target.textContent = 'Click me!';
    }
  }

  return(
    <button className={styles.button} onClick={(e) => ClickMeButton(e)}>
        Click me!
    </button>
  )
}

export default Button;