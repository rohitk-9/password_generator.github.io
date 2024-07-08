import React from 'react';

export default function Copybtn(props) {
    const copyText = async() => {
        document.getElementById("copy-btn").innerHTML="Copied";
        setTimeout(() => {
          document.getElementById("copy-btn").innerHTML = props.btntext;
        }, 1000);     
        try {
          await navigator.clipboard.writeText(props.textToCopy);
      } catch (err) {
          console.error(
              "Unable to copy to clipboard.",
              err
          );
          alert("Copy to clipboard failed.");
      }
    }

  return (
      <button id="copy-btn" onClick={copyText} style={{width:"34%"}}>{props.btntext}</button>
  )
}
