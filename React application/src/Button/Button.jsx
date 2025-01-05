/*
1- This is a simple button component.

2- We've also learned how to use CSS modules in React.
Plus: CSS Modules are a way to write CSS that's scoped to a single component(Button here), and not leak to any other element on the web page.
Plus 2 : You write your CSS in a separate file, and then import it into your component file using "styles" (it then target all the elements you have created in the css file).
Plus 3: You will use the styles.blablabla to target the specific class you have created in the css file that you want to use.

3- We've also learned how to use the onClick event in React.


 */


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