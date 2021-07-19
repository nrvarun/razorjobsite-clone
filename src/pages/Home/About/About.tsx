import Container from "@components/Container";
import List from "@components/List";
import { Heading1, Heading3, Paragraph } from "@components/Typography";
import React from "react";
import { StyledAbout } from "./About.style";

const About = () => {
  return (
    <StyledAbout>
      <Container>
        <Heading1>Frontend at Razorpay</Heading1>
        <Paragraph>
          The team at Razorpay strives to build solid frontend foundations,
          infrastructure and top-notch experiences.
        </Paragraph>
        <Heading3>What should you expect?</Heading3>
        <List
          type="ul"
          data-list-id="mark"
          items={[
            "Freedom to evaluate and introduce new tools, libraries or coding standards 🎮",
            "Work on developer productivity and platform tooling 👨🏻‍💻",
            "Evangelise tech and share knowledge internally and in external forums 🤝",
            "BYOG - Bring Your Own Goals 🎯",
            "FreeContribute to Product and Design ideas and implement them like it's your own product. We value everyone’s inputs 💪",
          ]}
        />
      </Container>
    </StyledAbout>
  );
};

export default About;
