import React, { useEffect, useState } from 'react'

type Quiz = {
  options: string[]
  correct: string
}

export default function IconQuiz() {
  const [quizData, setQuizData] = useState<Quiz | null>(null)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const colors = [
    'bg-red-300 hover:bg-red-400',
    'bg-blue-300 hover:bg-blue-400',
    'bg-green-300 hover:bg-green-400',
    'bg-yellow-300 hover:bg-yellow-300',
  ]

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/quizData/itIcon.json')
      const data: Quiz[] = await res.json()
      setQuizData(data[2])
    }
    fetchData()
  }, [])

  const handleSelect = (option: string) => {
    setSelectedOption(option)
    if (quizData) {
      setIsCorrect(option === quizData.correct)
    }
  }

  if (!quizData) return <p>読み込み中...</p>

  return (
    <div className='p-10'>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-xl mb-5'>Q.1</p>
        <img
          src={`/itIconImg/${quizData.correct}.svg`}
          alt=''
          className='w-40 md:w-50 border-2 border-gray-200 rounded-3xl'
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 mt-10 text-center gap-x-6 gap-y-6 md:gap-y-10 w-fit mx-auto'>
        {quizData.options.map((option, index) => {
          let baseColor = colors[index % colors.length]

          // 選択済みなら、正誤に応じて色を上書き
          if (selectedOption === option) {
            baseColor =
              option === quizData.correct
                ? 'bg-green-400'
                : 'bg-red-400'
          }

          return (
            <p
              key={index}
              className={`rounded-xl px-30 md:px-40 py-6 md:py-8 cursor-pointer ${baseColor}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </p>
          )
        })}
      </div>

      {selectedOption && (
        <p className='mt-5 text-center text-lg'>
          {isCorrect ? '正解です！🎉' : '不正解です。😢'}
        </p>
      )}
    </div>
  )
}
