import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: [
      //     "Euclid",
      //     '"helvetica neue"',
      //     "Helvetica",
      //     "Arial",
      //     "sans-serif",
      //   ],
      // },
      boxShadow: {
        button: "0 5.83px 19.83px rgba(8,46,81,.13)",
        dropdown: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      backgroundPosition: {
        "center-top": "center top",
      },
      backgroundImage: {
        facebook:
          "url(https://static3.zoosk.com/browser-d90a527a/touch/en-US/assets/images/svg/icons/facebook-round-logo-aes.svg)",
        twitter:
          "url(https://static3.zoosk.com/browser-d90a527a/touch/en-US/assets/images/svg/icons/twitter-round-logo-aes.svg)",
        instagram:
          "url(https://static3.zoosk.com/browser-d90a527a/touch/en-US/assets/images/svg/icons/instagram-round-logo-aes.svg)",
        arrowDown:
          "url(https://static3.zoosk.com/browser-dd88622c/touch/en-US/assets/images/browser/icons/select-arrow.svg)",
        form: "url(https://static3.zoosk.com/browser-dd88622c/touch/en-US/assets/images/browser/seo-homepage/form-border.svg)",
      },
      gridTemplateColumns: {
        "100": "repeat(100, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-28": "span 28 / span 28",
        "span-44": "span 44 / span 44",
      },
    },
  },
  plugins: [],
};
export default config;
