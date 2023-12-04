"use client";

interface MessageProps {
  message: string;
  className?: string;
}

const Message = ({ message, className }: MessageProps) => {
  return (
    <div
      className={` rounded-xl border-2 border-solid border-[#fcd980] ${className}`}
    >
      <div
        className={`bg-[#00000080] rounded-xl w-full p-6 text-[#d9d6ff] text-4xl flex justify-center items-center`}
      >
        {message}
      </div>
    </div>
  );
};

export default Message;
