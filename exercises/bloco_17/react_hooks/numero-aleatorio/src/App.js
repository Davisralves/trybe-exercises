import './App.css';
import React, {useEffect, useState} from 'react';
function App() {
  const [counter, changeCounter] = useState(10);
  const [sortedNumber, setNumber] = useState(0);
  const [RemoveTimer, setTimer] = useState(false);
  const [anwser, changeAnswser] = useState('');
  const [timer, changeTimer] = useState(10);
  useEffect(() => 
    setTimeout(() => {counter > 0 ? changeCounter(counter - 1) : changeCounter(10)} , 1000)  
    );

    const sortNumber = () =>{
      if(counter === 10) { 
        return Math.floor((Math.random() * 99 + 1))
      } return sortedNumber;
    }
  
    const Anwser = () => {
      if(counter >= 6) {
        if(sortedNumber % 3 === 1 || sortedNumber % 5 === 1) {
          return 'Acertou'
        } return 'Errou'
      } return ''
    }

  const timerValue = () => counter >= 6 ? counter : ''; 

  useEffect(() => setNumber(sortNumber()), [counter])

  useEffect(() => changeAnswser(Anwser()), [counter])

  useEffect(() => changeTimer(timerValue()), [counter] )



  return (
    <div className="App">
     <h3>{timer}</h3>
      <div>
    <h4>{sortedNumber}</h4>
    <span>
      <h4>{anwser}</h4>
    </span>
      </div>
    </div>
  );
}

export default App;
