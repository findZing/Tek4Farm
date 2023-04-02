import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Form = ({ children, title, headerButton = null, handleClickHeaderButton}) => {
  return (
    <div className="w-[400px] border border-black rounded-[20px] flex flex-col items-center px-[20px] py-[10px] gap-[10px] bg-white">
      <div className="w-full flex flex-row items-center justify-between">
        {headerButton ? (
          <button onClick={() => handleClickHeaderButton()}>
            <AiOutlineArrowLeft size={18}/>
          </button>
        ) : <div />}
        <h1 className="text-[20px] font-bold">{title}</h1>

        <div />
      </div>
      {children}
    </div>
  );
};

export default Form;
