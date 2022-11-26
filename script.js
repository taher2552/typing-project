const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");
const timerElement = document.getElementById("timer");

const DEMO_QUOTE =
  "some the rules of etiquette may seem outdated stuffy and unnecessary";

  function render(){
    const quoteArr=DEMO_QUOTE.split('');
    quoteDisplayElement.innerText="";

    quoteArr.forEach((char)=>{
        const newSpan=document.createElement('span');
        newSpan.innerText=char;
        quoteDisplayElement.append(newSpan);
    })
  }

  render();
 

  quoteInputElement.addEventListener('input', ()=>{

    const quoteArr=quoteDisplayElement.querySelectorAll('span');

    const inputArr=quoteInputElement.value.split('')
    // console.log(inputArr)

    let isCorrect=true;
    
    quoteArr.forEach((charSpan, index)=>{
        const inputChar=inputArr[index];
       if(inputChar==charSpan.innerText){
        charSpan.classList.add('correct')
        isCorrect=true;
     
       }
       else if(inputChar==null){
        charSpan.classList.remove('correct')
        charSpan.classList.remove('incorrect')
        isCorrect=false;
       }
       else if(inputChar!==charSpan.innerText){
        
        charSpan.classList.add('incorrect')
        isCorrect=false;

       }
     
        
    })
    if(isCorrect){
        render();
    quoteInputElement.value="" 
    console.log(calculateSpeed())
    startTimer();
  }

  })

  let startTime;
  function startTimer() {
    // Start the timer with 0
    timerElement.innerText = 0;
    startTime = new Date();
  
    // setTimeout - Runs once
    // setInterval - Runs every given seconds
  
    setInterval(() => {
      // currentTime - startTime
      const timeElapsed = Math.floor((new Date() - startTime) / 1000);
      timerElement.innerText = timeElapsed;
    }, 1000);
  
    // calculate every second the time has elapsed.
  }

  function getTime() {
    return Math.floor((new Date() - startTime) / 1000);
  }

 




  function calculateSpeed() {
    console.log(getTime())
    const length = DEMO_QUOTE.split(" ").length;
    return (length / (getTime() / 60));
  }

  startTimer()
  