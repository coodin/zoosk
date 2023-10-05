const Humburger = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g stroke="#374756" strokeLinecap="round" strokeWidth={1.5}>
        <path d="M20 7H4M20 12H4M20 17H4" />
      </g>
    </svg>
  );
};

export default Humburger;
