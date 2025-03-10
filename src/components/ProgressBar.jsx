import React from 'react';
import { FaQuestionCircle, FaFlagCheckered, FaThumbtack } from 'react-icons/fa'; // Added icon for marked questions

const ProgressBarCard = ({ totalQuestions, count, marked }) => {
  return (
    <div className="bg-[#c8d8e4] p-6 rounded-3xl shadow-xl max-w-3xl w-full mx-auto mb-6">
      <h3 className="text-3xl font-extrabold text-center text-[#2b6777] mb-4">
        <FaQuestionCircle className="inline-block mr-2 text-yellow-500" /> {/* Question icon */}
        Progress
      </h3>
      <div className="text-xl font-semibold text-[#2b6777] mb-4 flex justify-between items-center">
        <span>
          <FaFlagCheckered className="inline-block mr-2 text-green-500" /> {/* Flag icon */}
          Question: {count}/{totalQuestions}
        </span>
        <span>
          <FaThumbtack className="inline-block mr-2 text-blue-500" /> {/* Marked icon */}
          Marked: {marked}/{totalQuestions}
        </span>
      </div>
      <div className="w-full bg-gray-200 h-2.5 rounded-full mb-2">
        <div
          className="bg-[#2b6777] h-2.5 rounded-full"
          style={{ width: `${(count / totalQuestions) * 100}%` }}
        ></div>
      </div>
      <div className="text-sm text-[#2b6777] text-center">
        {/* You can show additional messages like how far they are into the quiz */}
        {count === totalQuestions ? "Quiz Complete!" : "Keep going, you're almost there!"}
      </div>
    </div>
  );
};

export default ProgressBarCard;