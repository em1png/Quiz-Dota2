import { useState } from 'react'
import { Game, Result, MyToggle } from './components'
import { questionsList } from './assets/QuestionList'

function App() {
  // Current question's index and object.
  const [currentStep, setCurrentStep] = useState(0);
  const currentQuestion = questionsList[currentStep];

  // User's answers array, correct answers counter and progress bar.
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctCounter, setCorrectCounter] = useState(0);
  const progressBar = Math.round((currentStep / questionsList.length) * 100);

  // Dark mode state.
  const [darkMode, setDarkmode] = useState(false);

  const checkReply = (index) => {
    setUserAnswers([...userAnswers, index]);
    setCurrentStep(currentStep + 1);

    if (index === currentQuestion.correct) 
      setCorrectCounter(correctCounter + 1);
  }

  return (
    <div className={`w-screen h-screen ${darkMode ? 'dark' : ''} `}>
      <div className='w-screen h-screen flex items-center justify-center bg-gradient-to-br from-zinc-700 to-black saturate-50 dark:from-neutral-300 dark:to-neutral-500'>
        <div className='text-white rounded-xl bg-zinc-900 w-[600px] p-6 m-3 invert dark:invert-0'>
          <div className='text-end mb-5'>
            <MyToggle darkMode={setDarkmode} />
          </div>
          <div>
            {currentStep !== questionsList.length
              ? <Game progressBar={progressBar} currentStep={currentStep} correctCounter={correctCounter} checkReply={checkReply} />
              : <Result correctCounter={correctCounter} userAnswers={userAnswers}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
