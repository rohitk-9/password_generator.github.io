import React, { useState } from 'react';
import Copybtn from './Copybtn';
import Slider, { sliderval } from './Slider';

let arr1 = [0, 1, 2, 3];
let first, second, third, fourth;
export default function Passwd() {
  const [new_passwd, setText] = useState('');
  const [historyValue, updateHistoryState] = useState('History\n');


  function password_call(length) {
    let password = '';
    let availableChars = '';

    if (arr1.includes(3)) availableChars += '!@#$%&';
    if (arr1.includes(1)) availableChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (arr1.includes(0)) availableChars += 'abcdefghijklmnopqrstuvwxyz';
    if (arr1.includes(2)) availableChars += '0123456789';

    for (let i = 0; i < length; i++) {
      const character = availableChars[Math.floor(Math.random() * availableChars.length)];
      password += character;
    }

    return password;
  }

  function handleChange(data, event) {
    if (data === "first") {
      arr1[0] = arr1[0] === 0 ? false : 0; 
    } else if (data === "second") {
      arr1[1] = arr1[1] === 1 ? false : 1; 
    } else if (data === "third") {
      arr1[2] = arr1[2] === 2 ? false : 2; 
    } else if (data === "fourth") {
      arr1[3] = arr1[3] === 3 ? false : 3; 
    }
    const allNull = arr1.every(element => element === false);
    if (allNull) {
      alert("please select atleast one option")
      console.log('All elements in the array are null');
    }
  }

  function generate_passwd() {
    const allNull = arr1.every(element => element === false);
    if (allNull) {
      alert("please select atleast one option")
      console.log('All elements in the array are null');
      return
    }
    let length = sliderval;
    let password = password_call(length);
    updateHistoryState(historyValue + password + "\n");
    setText(password);
    scrollToBottom();
  }

  const myTextarea = document.querySelector('#history_area');
  function scrollToBottom() {
    if (myTextarea) myTextarea.scrollTop = myTextarea.scrollHeight;
  }

  return (
    <div>
      <header>Password Generator</header><br/>
      <div className="main-section">
        <textarea id="history_area" value={historyValue} readOnly></textarea> 
        <div className="password_ce">
          <input type="text" id="password" value={new_passwd} onChange={(e) => setText(e.target.value)} />
          <Copybtn btntext="Copy password" textToCopy={new_passwd} />
        </div>
        <input id="submit-btn" type="submit" onClick={generate_passwd} value="Generate password" /> 
        <Slider defaultValue={8} />
        <div className='checkbox'>
          <label htmlFor="smallaz">
            <input type="checkbox" name="option" defaultChecked id="smallaz" value={first} onChange={() => handleChange("first")} required />a-z 
          </label>
          <label htmlFor="capitalAZ">
            <input type="checkbox" name="option" id="capitalAZ" defaultChecked value={second} onChange={() => handleChange("second")} />A-Z
          </label>
          <label htmlFor="num">
            <input type="checkbox" name="option" id="num" defaultChecked value={third} onChange={() => handleChange("third")} />0-9
          </label>
          <label htmlFor="symbol">  
            <input type="checkbox" name="option" id="symbol" defaultChecked value={fourth} onChange={() => handleChange("fourth")} />Symbols<br/>
          </label>
        </div>
      </div>
    </div>  
  );
}
