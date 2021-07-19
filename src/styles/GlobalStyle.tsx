import { createGlobalStyle } from "styled-components";
import { CustomCSS } from "./CustomStyles";
import { NormalizeCSS } from "./Normalize";

export const GlobalStyle = createGlobalStyle`
${NormalizeCSS}
${CustomCSS}
`;
