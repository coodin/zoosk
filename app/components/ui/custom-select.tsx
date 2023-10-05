import Check from "@/public/svg-react/check";
import { useState } from "react";

type CustomSelectProps = {
  label: string;
  type: "Day" | "Month" | "Year";
};

const CustomSelect: React.FC<CustomSelectProps> = ({ label, type }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div
      onClick={() => setOpen((value) => !value)}
      className="w-full h-full relative "
    >
      <input
        name={type}
        hidden
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div
        style={{
          backgroundPositionY: "center",
          backgroundPositionX: "calc(100% - 13px)",
        }}
        className={`flex  ${open ? "border-[#19b7ea]" : "border-[#a4adb5]"} ${
          value ? "bg-white" : "bg-[#f8f9fa]"
        } py-[10px]  px-[20px]  border bg-arrowDown border-solid text-sm font-normal  bg-no-repeat    rounded-md h-[45px]`}
      >
        <p
          className={`not-italic ${
            value.length != 0
              ? "text-[#374756] font-thin  "
              : " font-normal  text-[#7f8b96]"
          }   text-base  pt-[1px]`}
        >
          {value.length == 0 ? label : value}
        </p>
      </div>
      <div
        className={`absolute ${
          open ? "flex" : "hidden"
        } rounded w-full max-h-[300px] shadow-dropdown overflow-auto  flex-col z-10 mt-[1px] bg-white`}
      >
        <div className="flex-1  overflow-y-auto py-[5px] px-0">
          {(type === "Day"
            ? Array.from({ length: 31 }, (_, i) => i + 1)
            : type == "Year"
            ? Array.from({ length: 106 }, (_, i) => 2023 - i)
            : type == "Month"
            ? month
            : []
          ).map((item) => (
            <div
              onClick={() => setValue(item.toString())}
              key={item}
              className={`${
                item == value
                  ? "text-white bg-[#19b7ea] pt-1 pb-[1px] pl-[3px] hover:bg-[#19b7ea]"
                  : "hover:bg-[#cbd3df]"
              } cursor-pointer pl-5 pt-1 pb-[1px] pr-0 flex items-center`}
            >
              {item == value && (
                <Check
                  className="relative bottom-1 right-1"
                  width={18}
                  height={18}
                />
              )}
              <p className={`p-0 mt-[3px] mb-[10px] `}>
                <span className="text-[#374756] "></span>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
