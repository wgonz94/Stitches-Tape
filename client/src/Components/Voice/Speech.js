import React, { useState, useEffect } from 'react';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const Speech = ({ handleVoice }) => {
  //   const [voiceInput, setVoiceInput] = useState('');

  // use voiceinput
  let getVoice = () => {
    // start listening
    recognition.start();
    console.log('listening...');

    // handle input
    recognition.onresult = e => {
      let last = e.results.length - 1;
      let transcript = e.results[last][0].transcript;
      let mobileRepeatBug =
        last === 1 && transcript === e.results[0][0].transcript;

      if (!mobileRepeatBug) {
        console.log(transcript);
        // setVoiceInput({ transcript });
        handleVoice({ transcript });
      }
    };

    recognition.onspeechend = () => {
      recognition.stop();
      console.log('no longer listening.');
    };
  };

  //   useEffect(() => {
  //     getVoice();
  //   });

  return (
    <div>
      <i className='material-icons' onClick={getVoice}>
        microphone
      </i>
    </div>
  );
};

export default Speech;
