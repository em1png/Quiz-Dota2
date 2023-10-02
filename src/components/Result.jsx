import React from 'react'
import { GiAxeSwing } from 'react-icons/gi'
import { questionsList } from '../assets/QuestionList'
import ResultTable from './ResultTable'

const Result = ({ correctCounter, userAnswers}) => {
  return (
    <div className='flex flex-col items-center'>
      <GiAxeSwing size={64} />
      <h2 className='text-3xl font-semibold text-center p-3 mb-3'> Your result - {correctCounter} out of {questionsList.length} </h2>
      <ResultTable userAnswers={userAnswers} />
      <a href="/" className='w-full'><button className='bg-zinc-800 w-full py-2 rounded-xl font-semibold'>TRY AGAIN.. </button></a>
    </div>
  )
}

export default Result