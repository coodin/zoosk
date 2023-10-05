import Eye from "@/public/svg-react/eye";
import EyeActive from "@/public/svg-react/eye-active";
import { useState } from "react";
import LoginButton from "./ui/button-for-login";
import Facebook from "@/public/svg-react/facebook";
import Google from "@/public/svg-react/google";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyeState, setEyeState] = useState(false);

  return (
    <>
      <div className="z-10 relative">
        <form
          onSubmit={(event) => {
            event.preventDefault();

            const email = event.currentTarget.elements.namedItem(
              "email"
            ) as HTMLInputElement;
            const password = event.currentTarget.elements.namedItem(
              "password"
            ) as HTMLInputElement;

            console.log(`email:${email.value}`);
            console.log(`password:${password.value}`);
          }}
        >
          {/* Email Address */}
          <div className="mb-4">
            <label
              htmlFor="preference"
              className="not-italic  font-normal text-[15px] mb-2 mt-5 text-base text-[#5a6978] block"
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
                className={` bg-[#f8f9fa] focus:border-[#19b7ea] focus:border focus:border-solid placeholder:text-[#374756]  placeholder:text-base placeholder:overflow-ellipsis font-normal w-full h-[45px] py-[10px] px-[20px] text-base focus-visible:outline-none not-italic border border-solid border-[#a4adb5] rounded-[0.6rem]  text-[#374756]`}
              />
            </div>
          </div>
          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="preference"
              className="not-italic  font-normal text-[15px] mb-2 mt-5 text-base text-[#5a6978] block"
            >
              Password
            </label>
            <div className="mb-4 relative">
              <input
                type={eyeState ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={`bg-[#f8f9fa] rounded-[0.6rem] focus:border-[#19b7ea] focus:border focus:border-solid placeholder:text-[#374756] placeholder:text-base placeholder:overflow-ellipsis font-normal w-full h-[45px] py-[10px] px-[20px] text-base focus-visible:outline-none not-italic border border-solid border-[#a4adb5]  text-[#374756]`}
              />
              <div
                onClick={() => setEyeState((value) => !value)}
                className="absolute top-[50%] cursor-pointer h-[30px] w-[30px] -translate-y-[50%] right-2"
              >
                {eyeState ? (
                  <EyeActive width={30} height={30} />
                ) : (
                  <Eye width={30} height={30} />
                )}
              </div>
            </div>
          </div>
          {/* Forget Password */}
          <div className="text-[#5a6978] text-center cursor-pointer my-5">
            <span className="text-[15px] text-[#5a6978] cursor-pointer no-underline font-medium">
              Forgot password?
            </span>
          </div>
          {/* Login */}
          <div>
            <button
              className="hover:opacity-80
               inline-block mt-[15px] transition-[background,box-shadow]
                 ease-in-out duration-100  text-xl font-normal min-w-full
                  whitespace-normal pt-[13px] pb-[14px] mb-[20px] border-[4px] border-transparent
                 disabled:hover:opacity-100 disabled:bg-[#dadada] disabled:border-[#bebebe] disabled:text-[#999] disabled:border-none
                   shadow-button bg-[#19b7ea]  rounded-[250px] text-white"
            >
              <span className="block">Login</span>
            </button>
          </div>
          {/* OR */}
          <div
            className="relative my-5 text-[#7f8b96] text-xl after:absolute after:top-[50%] after:bg-[#7f8b96]
             after:content-[''] after:h-[2px] after:w-[25%] after:right-[10%] after:-translate-y-[50%] text-center 
             before:absolute before:top-[50%] before:bg-[#7f8b96]
             before:content-[''] before:h-[2px] before:w-[25%] before:left-[10%] before:-translate-y-[50%]"
          >
            Or
          </div>
          {/* Login Facebook and Google */}
          <div className="flex flex-col gap-4 my-5">
            <LoginButton
              className="py-2  px-1 hover:bg-[#f7f8fb] flex-none w-full text-[15px] text-[#1b3e85] rounded-[7px] border-[#969fafb3]"
              Icon={<Facebook width={40} height={40} className="" />}
              text="Log in  With Facebook*"
            />
            <LoginButton
              className="py-2 px-1 hover:bg-[#f7f8fb] flex-none w-full text-[15px]  text-[#5a6978] rounded-[7px] border-[#969fafb3]"
              Icon={<Google width={25} height={25} className="" />}
              text="Log in  With Google*"
            />
          </div>
          {/* Term of use */}
          <div>
            {" "}
            <p className="text-[#7f8b96] text-[11px] leading-[19px]">
              *By selecting "Log in with Facebook" or "Log in with Google", you
              agree to our
              <a href="" className="text-[#7f8b96] underline ml-1 mr-1">
                Terms of Use
              </a>
              (including the mandatory arbitration of disputes) and consent to
              our
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

export default SignIn;
