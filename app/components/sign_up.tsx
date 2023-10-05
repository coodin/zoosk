import Facebook from "@/public/svg-react/facebook";
import LoginButton from "./ui/button-for-login";
import Google from "@/public/svg-react/google";
import RadioBox from "./ui/radio-box";
import CustomSelect from "./ui/custom-select";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      {/* Sign Up */}

      <div className="flex relative justify-center items-center mb-5 gap-4 z-10">
        <LoginButton
          Icon={<Facebook width={40} height={40} className="" />}
          text="Sign Up"
        />
        <LoginButton
          Icon={<Google width={25} height={25} className="" />}
          text="Sign Up"
        />
      </div>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();

            const preference = event.currentTarget.elements.namedItem(
              "preference"
            ) as RadioNodeList;
            const gender = event.currentTarget.elements.namedItem(
              "gender"
            ) as RadioNodeList;
            const Day = event.currentTarget.elements.namedItem(
              "Day"
            ) as HTMLInputElement;
            const Month = event.currentTarget.elements.namedItem(
              "Month"
            ) as HTMLInputElement;
            const Year = event.currentTarget.elements.namedItem(
              "Year"
            ) as HTMLInputElement;
            const email = event.currentTarget.elements.namedItem(
              "email"
            ) as HTMLInputElement;
            const password = event.currentTarget.elements.namedItem(
              "password"
            ) as HTMLInputElement;

            console.log(`preference:${preference.value}`);
            console.log(`gender:${gender.value}`);
            console.log(`day:${Day.value}`);
            console.log(`month:${Month.value}`);
            console.log(`year:${Year.value}`);
            console.log(`email:${email.value}`);
            console.log(`password:${password.value}`);
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="not-italic font-semibold text-base text-[#374756] mt-5 mb-2 block"
            >
              I'm a:
            </label>
            <ul className="flex gap-2 items-start">
              <RadioBox
                id="woman"
                labelName="Woman"
                name="gender"
                type="gender"
              />
              <RadioBox id="man" labelName="Man" name="gender" type="gender" />
            </ul>
          </div>
          <div className="mb-4">
            <label
              htmlFor="preference"
              className="not-italic font-semibold text-base text-[#374756] mt-5 mb-2 block"
            >
              Interested in:
            </label>
            <ul className="flex gap-2 items-start">
              <RadioBox
                id="womanPref"
                labelName="Woman"
                name="preference"
                type="interest"
              />
              <RadioBox
                id="manPref"
                labelName="Man"
                name="preference"
                type="interest"
              />
              <RadioBox
                id="bothPref"
                labelName="Both"
                name="preference"
                type="interest"
              />
            </ul>
          </div>
          <div>
            <label
              htmlFor="date"
              className="not-italic font-semibold text-base text-[#374756] mt-5 mb-2 block"
            >
              Birhtday
            </label>
            <div className="mb-4">
              <div className="grid grid-cols-100">
                <div className="col-span-28 flex">
                  <CustomSelect type="Day" label="Day" />
                </div>
                <div className="col-span-44 flex ml-1">
                  <CustomSelect type="Month" label="Month" />
                </div>
                <div className="col-span-28 flex ml-1">
                  <CustomSelect type="Year" label="Year" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="preference"
              className="not-italic font-semibold text-base text-[#374756] mt-5 mb-2 block"
            >
              Email Address
            </label>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                className={` ${
                  email ? "bg-white" : "bg-[#f8f9fa]"
                } placeholder:text-[#374756] placeholder:text-base placeholder:overflow-ellipsis font-normal w-full h-[45px] py-[10px] px-[20px] text-base focus-visible:outline-none not-italic border border-solid border-[#a4adb5] rounded-[4px]  text-[#374756]`}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="preference"
              className="not-italic font-semibold text-base text-[#374756] mt-5 mb-2 block"
            >
              Password
            </label>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={` ${
                  password ? "bg-white" : "bg-[#f8f9fa]"
                } placeholder:text-[#374756] placeholder:text-base placeholder:overflow-ellipsis font-normal w-full h-[45px] py-[10px] px-[20px] text-base focus-visible:outline-none not-italic border border-solid border-[#a4adb5] rounded-[4px]  text-[#374756]`}
              />
            </div>
          </div>
          <div>
            <button className="hover:opacity-80 inline-block mt-[15px] transition-[background,box-shadow]  ease-in-out duration-100  text-xl font-normal min-w-full whitespace-normal pt-[13px] pb-[14px] mb-[20px] shadow-button bg-[#19b7ea] border-[4px] border-transparent rounded-[250px] text-white">
              <span className="block">Sign Up</span>
            </button>
          </div>
          <div>
            {" "}
            <p className="text-[#7f8b96] text-[11px] leading-[19px]">
              *By selecting "Sign Up", you agree to our
              <a href="" className="text-[#7f8b96] underline ml-1 mr-1">
                Terms of Use
              </a>
              (including the mandatory arbitration of disputes) and have
              understood our
              <a href="" className="text-[#7f8b96] underline ml-1">
                Privacy Notice
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
