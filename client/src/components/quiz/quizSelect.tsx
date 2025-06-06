import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

type QuizSelectProps = {
    href: string;
    imgSrc: string;
    alt: string;
    text: string;
};

const QuizSelect: React.FC<QuizSelectProps> = ({ href,imgSrc,alt,text }) => {
  return (
    <div>
      <Link href={`./quiz/${href}`}>
        <Image src={`/${imgSrc}.svg`} alt={alt} width={75} height={75}
            className="w-75 rounded-3xl border-2 border-gray-300 hover active"
            style={{ boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.2)' }}/>
        <small className='mt-4'>{text}</small>
      </Link>
    </div>
  )
}

export default QuizSelect