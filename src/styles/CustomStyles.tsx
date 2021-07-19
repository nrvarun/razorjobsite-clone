import { css } from "styled-components";

export const CustomCSS = css`
  //Custom Styles
  :root {
    --color: #ffffff;
    --text-color: #e2e8f0;
    --background-color: #141821;

    --orange-gradient: linear-gradient(
      to right,
      rgb(183, 14, 76) 0%,
      rgb(219, 140, 17) 100%
    );
    --pink-gradient: linear-gradient(
      to right,
      rgb(85, 27, 123) 0%,
      rgb(196, 19, 97) 100%
    );
    --green-gradient: linear-gradient(
      to right,
      rgb(16, 123, 66) 0%,
      rgb(155, 146, 5) 100%
    );
    --blue-gradient: linear-gradient(
      to right,
      rgb(161, 54, 217) 0%,
      rgb(0, 151, 141) 100%
    );

    --default-button-bgcolor: rgb(99, 99, 206);
  }

  html,
  body {
    font-size: 16px;
    color: var(--color, #ffffff);
    background-color: var(--background-color, #141821);
  }

  body {
    margin: 0px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    line-height: 1.625;
    font-weight: 400;
    padding: 0px;
    box-sizing: border-box;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;
