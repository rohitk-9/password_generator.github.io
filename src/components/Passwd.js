import React,{ useState } from 'react'

export default function Passwd() {
  const [new_passwd, setText] = useState('Test password');
  

  const copyText = async() => {
    document.getElementById("copy-btn").innerHTML="copied";
    setTimeout(() => {
      document.getElementById("copy-btn").innerHTML = "Copy password";
    }, 1000);     
    try {
      await navigator.clipboard.writeText(new_passwd);
  } catch (err) {
      console.error(
          "Unable to copy to clipboard.",
          err
      );
      alert("Copy to clipboard failed.");
  }

  
  }
  const handleNewPasswdOnChange = (event) => {
    setText(event.target.value)
  }


  return (
    <div>
      <header>Password Generator</header><br/>
      <div className="main-section">
        <textarea id="history_area" defaultValue={'History'} readOnly></textarea> 
        <div className="password_ce">
          <input type="text" id="password" value={new_passwd} onChange={handleNewPasswdOnChange}/>
          <button id="copy-btn" onClick={copyText} >Copy password</button>
        </div>



    {/* 
    
    
    </div>
    <input id="submit-btn" type="submit" onclick="gen()" value="Generate password"/> 
    <div id="password_length">  
      <label for="myRange">Password length : </label><span id="value"></span>
      <input type="range" id="myRange" name="myRange" min="4" max="25"/>
    </div> 
    <div className="checkbox">
      <label for="smallaz">
        <input type="checkbox" name="option" id="smallaz" checked required />a-z 
      </label>
      <label for="capitalAZ">
        <input type="checkbox" name="option" id="capitalAZ" checked />A-Z
      </label>
      <label for="num">
        <input type="checkbox" name="option" id="num" checked />0-9
      </label>
      <label for="symbol">  
        <input type="checkbox" name="option" id="symbol" checked />Symbols<br/>
      </label>
    </div> */}
  </div>
    </div>
  );
}
