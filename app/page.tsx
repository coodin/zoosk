"use client";

import Heart from "@/public/svg-react/heart";
import Humburger from "@/public/svg-react/humburger";
import { useEffect, useState } from "react";

import SignIn from "./components/sign_in";
import SignUp from "./components/sign_up";
import Close from "@/public/svg-react/close";
import Link from "next/link";

type User = {
  avatarUrl: string;
  nickname: string;
  online: boolean;
};

async function getUsers() {
  const res = await fetch(
    "https://v2.dreamchasers.de/users/get?database=vilove",
    { method: "POST" }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Home() {
  const [stateOfForms, setStateOfForms] = useState<boolean>(true);
  const [close, setClose] = useState(true);
  const [data, setData] = useState<User[] | undefined>(undefined);
  const [dataTwo, setDataTwo] = useState<User[] | undefined>(undefined);
  //const [dataTwo, setDataTwo] = useState<(User | undefined)[][]>([]);

  useEffect(() => {
    const fun = async () => {
      const result: User[] = await getUsers();
      const resultTwo: User[] = await getUsers();
      //   const alteredUsers = result.map((item, index, array) => {
      //     const value = index % 2 == 0 ? [item, array.at(index + 1)] : [];

      //     return value;

      //     // const start = index % 2 == 0 ? index : 1;
      //     // if (start == 1) return;
      //     // if (index == 0) {
      //     //   return [item, array.at(index + 1)];
      //     // }
      //     // const currentIndex = array.indexOf(item);
      //     // const value = [array.at(index+2), array.at(index + 3)];

      //     //return [array.at(value), array.at(value + 1)];
      //   });
      //  // setDataTwo(alteredUsers);
      setData(result);
      setDataTwo(resultTwo);
    };
    fun();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  // const data = await getUsers();

  ///https://v2.dreamchasers.de/users/get?database=vilove
  // useEffect(() => {
  //   const month = Array.from({ length: 31 }, (_, i) => i + 1);
  //   const year = Array.from({ length: 106 }, (_, i) => 2023 - i);
  //   console.log(month);
  //   console.log(year);
  // }, []);

  return (
    <>
      {/* Ghost Navbar */}
      <div
        className={`fixed overflow-hidden transition-colors ease-in-out duration-500 ${
          close
            ? "bg-transparent pointer-events-none"
            : "bg-[#cbd3dfcc] pointer-events-auto"
        } w-full  h-full overflow-y-auto
         p-0 top-0 bottom-0 left-0 right-0 z-[490]`}
      >
        <div
          className={`md:w-[514px] p-[25px] w-full transform ease-in-out duration-500 ${
            close ? "translate-x-[calc(100%_+_25px)] " : "translate-x-0"
          } h-full bg-white ml-auto md:p-10`}
        >
          <header className="flex justify-between items-center mb-[30px] md:mb-[70px]">
            <Heart className="w-[35px] h-[35px] md:h-[45px] md:w-[45px]" />
            <Close
              onClick={() => setClose((prev) => !prev)}
              className="cursor-pointer h-[35px] w-[35px] md:w-[45px] md:h-[45px]"
            />
          </header>
          <nav className="mb-[60px]">
            <ul className="mb-8 space-y-4">
              {[
                "About Zoosk",
                " Help Center",
                " Dating & Relationship",
                " Press",
              ].map((item) => (
                <li className="text-center md:text-left" key={item}>
                  <Link
                    className="text-[#374756] font-medium text-lg hover:opacity-70 duration-300"
                    href={""}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mb-8 space-y-4">
              {["Privacy", "Safety", "Terms of Use"].map((item) => (
                <li className="text-center md:text-left" key={item}>
                  <Link
                    className="text-[#7f8b96] font-medium text-lg hover:opacity-70 duration-300"
                    href={""}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* <div className="mb-[65px] flex"></div> */}
          {/* Footer */}
          <footer>
            <div className="flex justify-center md:justify-start mb-[50px] md:mb-[100px] space-x-6">
              <Link href={""} className="hover:opacity-70 duration-300">
                <span className="inline-block w-10 h-10 bg-facebook bg-[0px] bg-[length:40px_40px]"></span>
              </Link>
              <Link href={""} className="hover:opacity-70 duration-300">
                <span className="inline-block w-10 h-10 bg-twitter bg-[0px] bg-[length:40px_40px]"></span>
              </Link>
              <Link href={""} className="hover:opacity-70 duration-300">
                <span className="inline-block w-10 h-10 bg-instagram bg-[0px] bg-[length:40px_40px]"></span>
              </Link>
            </div>
            <div className="mb-0 flex flex-col md:flex-row items-center justify-start">
              <span className="text-[#374756] text-lg font-medium">
                © 2023 Zoosk
              </span>
            </div>
          </footer>
        </div>
      </div>
      <main className={`flex relative flex-col w-full`}>
        <header className="w-full px-[17px] py-[14px] md:w-[90%] mx-auto md:px-0 md:pt-5 md:pb-10">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-1">
              <Heart width={36} height={36} />
              <span className="text-[#023669] text-4xl font-bold tracking-normal ">
                zoosk
              </span>
            </div>

            <div className="flex gap-6 md:gap-12">
              <span
                onClick={() => setStateOfForms((prev) => !prev)}
                className="text-[#374756] text-xl cursor-pointer flex items-center justify-center hover:opacity-70"
              >
                {stateOfForms ? "Log In" : "Sign Up"}
              </span>
              <div className="cursor-pointer hover:opacity-70">
                <Humburger
                  onClick={() => setClose((prev) => !prev)}
                  width={32}
                  height={32}
                  stroke="50"
                />
              </div>
            </div>
          </div>
        </header>
        {/* Main Section */}
        <section className={`relative pb-8 lg:overflow-hidden`}>
          <div
            className={`flex w-full min-[768px]:w-[90%] ${
              stateOfForms
                ? "min-[990px]:justify-between"
                : "min-[990px]:justify-center"
            } mx-auto justify-center   pb-8`}
          >
            {/* Left Side */}
            {stateOfForms && (
              <div className=" flex-1 max-w-prose pt-14 hidden min-[990px]:block pr-8">
                <h2 className="text-[#374756]  text-5xl xl:text-6xl font-semibold mb-6">
                  Dating made
                  <strong className="text-[#19b7ea] ml-2">fun</strong>
                  <span className="inline-flex">... without the games.</span>
                </h2>
                <p className="text-[#374756]  mb-8  text-2xl xl:text-4xl">
                  Matching singles all around the world for over 13 years!
                </p>
              </div>
            )}
            {/* Right Side */}
            <div
              className="flex-1 relative z-10 w-full pt-14 px-5 pb-5 mb-20  flex-col sm:px-[37px] sm:pt-9 sm:pb-5 xl:mr-[50px]
         max-w-[450px] bg-no-repeat bg-form bg-center-top bg-white rounded-[20px] "
            >
              {stateOfForms ? <SignUp /> : <SignIn />}
            </div>
            {/* Users List */}
            <div className="absolute overflow-hidden -bottom-[450px] lg:-bottom-20 left-0 right-0 rotate-0 md:-rotate-3  w-full ">
              <div className="flex [&>*:nth-child(2n)]:-mt-6 gap-5 justify-center  ">
                {data?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`w-[220px] h-[250px] flex-none ${
                        index == 2 || index == 3
                          ? "opacity-100 shadow-xl"
                          : "opacity-20 "
                      } relative   flex flex-col hover:opacity-100 transition-all cursor-pointer hover:shadow-xl duration-300
                      justify-between  min-h-[200px] px-5 py-2  rounded-xl bg-slate-600`}
                    >
                      <header className="flex  justify-between  items-center relative z-10">
                        <div className="flex items-center gap-x-2">
                          <div
                            className={` ${
                              item?.online ? "bg-green-600" : "bg-red-500"
                            } h-2 w-2 rounded-full`}
                          ></div>
                          <span className="text-white font-normal text-sm">
                            {item?.online ? "Online" : "Offline"}
                          </span>
                        </div>
                        <Heart className="w-5 h-5" />
                      </header>
                      <div className="absolute left-0 right-0 bottom-0 top-0 bg-red-400 rounded-xl overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src={`https://firebasestorage.googleapis.com/v0/b/lovoomatch.appspot.com/o/images%${item?.avatarUrl}`}
                        />
                      </div>
                      <footer className="">
                        <span className="text-white relative z-10">
                          {item?.nickname}
                        </span>
                      </footer>
                    </div>
                  );
                })}
              </div>
              <div className="flex [&>*:nth-child(2n)]:-mt-6 gap-5 mt-5 justify-center  ">
                {dataTwo?.map((item) => (
                  <div
                    key={item?.avatarUrl}
                    className="w-[220px] h-[250px] flex-none  relative  opacity-20  flex flex-col
                         justify-between  min-h-[200px] px-5 py-2  rounded-xl bg-slate-600
                           hover:opacity-100 transition-all cursor-pointer hover:shadow-xl duration-300"
                  >
                    <header className="flex  justify-between  items-center relative z-10">
                      <div className="flex items-center gap-x-2">
                        <div
                          className={` ${
                            item?.online ? "bg-green-600" : "bg-red-500"
                          } h-2 w-2 rounded-full`}
                        ></div>
                        <span className="text-white font-normal text-sm">
                          {item?.online ? "Online" : "Offline"}
                        </span>
                      </div>
                      <Heart className="w-5 h-5" />
                    </header>
                    <div className="absolute left-0 right-0 bottom-0 top-0 bg-red-400 rounded-xl overflow-hidden ">
                      <img
                        className="w-full h-full object-cover"
                        src={`https://firebasestorage.googleapis.com/v0/b/lovoomatch.appspot.com/o/images%${item?.avatarUrl}`}
                      />
                    </div>
                    <footer className="">
                      <span className="text-white relative z-10">
                        {item?.nickname}
                      </span>
                    </footer>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-[90%] mt-[490px] lg:mt-5  mx-auto">
        <h2 className="text-[#374756] block min-[990px]:hidden  text-center text-3xl pt-[50px] xl:text-6xl font-semibold mb-6">
          Dating made
          <strong className="text-[#19b7ea] ml-2">fun</strong>
          <span className="block">... without the games.</span>
        </h2>
        <h3 className="text-3xl font-[200] text-[#374756] mt-8 text-center mb-8">
          Over <strong className="font-bold">30 million </strong>downloads.
        </h3>
        <div className="flex flex-col md:flex-row md:text-start text-center border-[#c9ced3] border-solid border-t pt-8">
          <div className="flex-1 pb-10">
            <h4 className="text-[#374756] text-base font-bold">Zoosk Dating</h4>
            <Link
              className="text-[#374756] block text-base mt-6 hover:opacity-70 duration-300"
              href={""}
            >
              Dating Site
            </Link>
            <Link
              className="text-[#374756] block text-base mt-6 hover:opacity-70 duration-300"
              href={""}
            >
              iPhone Dating App
            </Link>
            <Link
              className="text-[#374756] block text-base mt-6 hover:opacity-70 duration-300"
              href={""}
            >
              Android Dating App
            </Link>
            <Link
              className="text-[#374756] block text-base mt-6 hover:opacity-70 duration-300"
              href={""}
            >
              Start Dating
            </Link>
          </div>
          <div className="flex-1 pb-10">
            <h4 className="text-[#374756] text-base font-bold">
              Dating and Relationship Advice
            </h4>
            <Link
              className="text-[#374756] block text-base mt-6 hover:opacity-70 duration-300"
              href={""}
            >
              Dating Tips
            </Link>
            <Link
              className="text-[#374756] block text-base mt-6 hover:opacity-70 duration-300"
              href={""}
            >
              Online Dating Advice
            </Link>
            <Link
              className="text-[#374756] block text-base mt-6 hover:opacity-70 duration-300"
              href={""}
            >
              Relationship Advice
            </Link>
            <Link
              className="text-[#374756] block text-base mt-6 hover:opacity-70 duration-300"
              href={""}
            >
              Single Life
            </Link>
          </div>
          <div className="flex-1 pb-10">
            <h4 className="text-[#374756] text-base font-bold hover:opacity-70 duration-300">
              About Zoosk
            </h4>
            <Link
              className="text-[#374756] block text-base mt-6 hover:opacity-70 duration-300"
              href={""}
            >
              About Us
            </Link>
            <Link
              className="text-[#374756] block text-base mt-6 hover:opacity-70 duration-300"
              href={""}
            >
              Success Couples
            </Link>
            <Link
              className="text-[#374756] block text-base mt-6 hover:opacity-70 duration-300"
              href={""}
            >
              Careers
            </Link>
            <Link
              className="text-[#374756] block text-base mt-6 hover:opacity-70 duration-300"
              href={""}
            >
              Help
            </Link>
          </div>
          <div className="flex-1 pb-10">
            <h4 className="text-[#374756] text-base font-bold">Follow Zoosk</h4>
            <div className="flex justify-center pt-6 gap-x-10">
              <Link href={""} className="hover:opacity-70 duration-300">
                <img
                  src={
                    "https://static3.zoosk.com/browser-5a0837a8/touch/en-US/assets/images/svg/icons/facebook-round-logo.svg"
                  }
                  className="inline-block w-10 h-10 bg-[0px] hover:opacity-70 bg-[length:40px_40px]"
                ></img>
              </Link>
              <Link href={""} className="hover:opacity-70 duration-300">
                <img
                  src={
                    "https://static3.zoosk.com/browser-5a0837a8/touch/en-US/assets/images/svg/icons/twitter-round-logo.svg"
                  }
                  className="inline-block w-10 h-10  bg-[0px] hover:opacity-70 bg-[length:40px_40px]"
                ></img>
              </Link>
              <Link href={""} className="hover:opacity-70 duration-300">
                <img
                  src={
                    "https://static3.zoosk.com/browser-5a0837a8/touch/en-US/assets/images/svg/icons/instagram-round-logo.svg"
                  }
                  className="inline-block w-10 h-10  bg-[0px] hover:opacity-70 bg-[length:40px_40px]"
                ></img>
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex flex-col-reverse md:flex-row md:pt-[60px] pt-0 md:pb-5 justify-center md:justify-between md:items-center  pb-5">
          <p className="mt-8 md:mt-0 md:mb-4 leading-[30px] text-center text-[#374756] text-base">
            {" "}
            © Copyright 2007-2023 Zoosk, Inc. All rights reserved.
          </p>
          <div className="text-center">
            <Link
              className="text-[#374756] font-semibold text-base inline-block py-0 px-3 
                  border-r border-solid border-[#374756] mb-[17px] hover:opacity-70 duration-300"
              href={``}
            >
              {" "}
              Accessibility{" "}
            </Link>{" "}
            <Link
              className="text-[#374756] font-semibold text-base inline-block py-0 px-3 
                  border-r border-solid border-[#374756] mb-[17px] hover:opacity-70 duration-300"
              href={``}
            >
              {" "}
              Safety{" "}
            </Link>{" "}
            <Link
              className="text-[#374756] font-semibold text-base inline-block py-0 px-3 
                  border-r border-solid border-[#374756] mb-[17px] hover:opacity-70 duration-300"
              href={``}
            >
              {" "}
              Terms of Service{" "}
            </Link>{" "}
            <Link
              className="text-[#374756] font-semibold text-base inline-block py-0 px-3 
                  border-r border-solid border-[#374756] mb-[17px] hover:opacity-70 duration-300"
              href={``}
            >
              {" "}
              Privacy{" "}
            </Link>{" "}
            <Link
              className="text-[#374756] font-semibold text-base inline-block py-0 px-3 
                  border-solid border-[#374756] mb-[17px] hover:opacity-70 duration-300 border-r-0 pr-0"
              href={``}
            >
              {" "}
              Imprint{" "}
            </Link>{" "}
          </div>
        </div>
        <div className="pb-16 text-xs font-bold mb-0 flex leading-4 text-[#374756]">
          <span className="text-justify">
            ZOOSK DOES NOT CONDUCT CRIMINAL BACKGROUND CHECKS ON THE MEMBERS OR
            THE SUBSCRIBERS OF THIS WEBSITE.
            <br />
            HOWEVER, THE SAFETY AND SECURITY OF OUR MEMBERS IS OUR TOP PRIORITY.
            BY SIGNING UP TO OUR SERVICES YOU ALSO AGREE TO READ AND FOLLOW OUR
            <br />
            <Link href={``} className="text-[#1379de] text-[12px]">
              {" "}
              ONLINE DATING SAFETY TIPS
            </Link>
          </span>
        </div>
      </footer>
    </>
  );
}
