import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

type RadioBoxProps = {
  id: string;
  name: string;
  labelName: string;
  type: "gender" | "interest";
};

const RadioBox: React.FC<RadioBoxProps> = ({ id, labelName, name, type }) => {
  // const value = useRef("");
  const value = type;
  return (
    <>
      <li className="flex-1 basis-0">
        <input
          type="radio"
          id={id}
          name={name}
          value={labelName}
          // ref={value.current}
          // onFocus={(e) => e.persist()}
          className={`opacity-0 fixed w-0 peer`}
        />
        <label
          htmlFor={id}
          className={cn(
            `flex  peer-checked:border-[#19b7ea]
          peer-checked:border-solid peer-checked:bg-[#e6f8ff] justify-center 
          items-center px-4 py-2 h-12 bg-[#f8f9fa] border border-solid
           border-[#a4adb5] rounded-[30px] not-italic font-normal text-base text-[#374756]`,
            `peer-focus:border-2`
          )}
        >
          {labelName}
        </label>
      </li>
    </>
  );
};

export default RadioBox;
