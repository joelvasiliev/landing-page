"use client";

import { useState } from 'react';

export const AnswerCard = ({answer, response}:{
  answer: string,
  response: string,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative bg-black text-white rounded-lg border-t-4 border-purple-500 transition-all duration-500 ease-in-out cursor-pointer overflow-y-auto w-[80%] 
      ${isExpanded ? 'h-[200px]' : 'h-[150px]'} scale-95 hover:scale-100 overflow-hidden`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        <h2 className="text-xl font-bold break-words">{answer}</h2>
        {isExpanded && (
          <p className="mt-4 break-words">{response}</p>
        )}
      </div>
    </div>
  );
};
