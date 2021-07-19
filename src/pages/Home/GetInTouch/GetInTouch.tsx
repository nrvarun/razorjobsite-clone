import Button from "@components/Button";
import Container from "@components/Container";
import { Heading1, Paragraph } from "@components/Typography";
import { FC } from "react";
import { StyledContact } from "./GetInTouch.style";

const GetInTouch: FC = () => {
  return (
    <StyledContact>
      <Container>
        <Heading1 text="Sounds exciting?" />
        <Paragraph text="Fill in the following application form and leave the rest to us!" />
        <br />
        <Button text="apply now" data-id="contact-cta" />
      </Container>
    </StyledContact>
  );
};

export default GetInTouch;
