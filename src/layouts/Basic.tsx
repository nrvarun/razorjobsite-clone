import { GlobalStyle } from "@styles/GlobalStyle";

const Basic = ({ children, ...props }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default Basic;
