import React,{ useState } from 'react'
import Copybtn from './Copybtn';
import Slider, {sliderval} from './Slider';

export default function Passwd() {
  const [new_passwd, setText] = useState('');
  const [historyValue, updateHistoryState] = useState('History\n');
  const handleNewPasswdOnChange = (event) => {
    setText(event.target.value);
  }
  function generate_char(character){
    switch (character){
      case 0:
        const myArray = ['!', '@', '#', '$', '%', '&'];  
        const randomElement = myArray[Math.floor(Math.random() * myArray.length)];  
        return(randomElement);
      case 1:
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        return(randomLetter);
      case 2:
        const small_alphabet = 'abcdefghijklmnopqrstuvw';
        const randomsmallLetter = small_alphabet[Math.floor(Math.random() * small_alphabet.length)];
        return(randomsmallLetter)
      case 3:
        const randomNumber = Math.floor(Math.random() * 10);
        return(randomNumber)
      default:
        console.log("Character cannot be generated");
    }
  }
  
  function password_call(arr1, length){
    let password = ''
    let arr2 = []
    for(let i=0; i<length; i++){  
      if (arr1.length === 0){
        arr1 = arr2
        arr2 = []
      }
      let character = arr1[Math.floor(Math.random()*arr1.length)]
      arr2.push(character);
      const index = arr1.indexOf(character);
      arr1.splice(index, 1);
      password = password + generate_char(character)
    } 
    return password
  }
  function generate_passwd(){
    let arr1 = [0,1,2,3];
    let length=sliderval;
    let password = password_call(arr1, length);
    updateHistoryState(historyValue+password+"\n");
    setText(password)
    scrollToBottom()
  }

  const myTextarea = document.querySelector('#history_area');
  function scrollToBottom() {
    if (myTextarea)
      myTextarea.scrollTop = myTextarea.scrollHeight;
  }

  // console.log(sliderval)
  
  return (
    <div>
      <header>Password Generator</header><br/>
      <div className="main-section">
        <textarea id="history_area" value={historyValue}  readOnly></textarea> 
        <div className="password_ce">
          <input type="text" id="password" value={new_passwd} onChange={handleNewPasswdOnChange}/>
          <Copybtn btntext = "Copy password" textToCopy ={new_passwd} />
        </div>
        <input id="submit-btn" type="submit" onClick={generate_passwd} value="Generate password" /> 
        <Slider defaultValue={8} />
      </div>
    </div>  
  );
}
