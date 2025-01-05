/* 
1- Again it is just an implementation of useState hook. Here we are using useState to store the color value.
2- We are using the input type color to select the color and onChange event to update the color value.
3- What is maybe new and interesting is that we are using the inline style to change the background color of the div element.
4- This is a good example of how to use inline styles in React.
5- It is also a good example of how to use useState to store the value of the color.

Plus: To write an inline style, you need to obviously use the style attribute and pass in, an object(so in curly braces) with the CSS properties in camelCase as keys.
*/


import {useState} from 'react';

function ColorPicker(){

    const [colorChoosen, setColor] = useState("#000000");

    function onColorChoosen(event){
        setColor(event.target.value);
        // document.getElementsByClassName("color-display")[0].style.backgroundColor = event.target.value;
    }

    return(
        <div className='color-picker'>
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: colorChoosen}}>
                <h2>The selected color is: {colorChoosen}</h2>
            </div>
            <input type="color" value={colorChoosen} onChange={onColorChoosen}/> Select a Color
        </div>
    )
}

export default ColorPicker;