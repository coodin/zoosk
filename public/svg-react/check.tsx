import { SVGProps } from "react";

const Check = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#fff"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M18.381 5.354a.75.75 0 0 1 .265 1.027l-7.087 12a.75.75 0 0 1-1.164.16L5.48 13.838a.75.75 0 0 1 1.038-1.084l4.23 4.051 6.605-11.185a.75.75 0 0 1 1.027-.265Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Check;
