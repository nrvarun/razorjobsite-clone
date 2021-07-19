import Container from "@components/Container";
import List from "@components/List";
import { Heading1, Heading3, Paragraph } from "@components/Typography";
import React from "react";
import { StyledAbout } from "./About.style";

const About = () => {
  return (
    <StyledAbout>
      <Container>
        <Heading1 text="Frontend at Razorpay" />
        <Paragraph
          text="The team at Razorpay strives to build solid frontend foundations,
          infrastructure and top-notch experiences."
        />
        <Heading3 text="What should you expect?" />
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
        <Heading3 text="Glimpse of some exciting stuff that we are working on" />
        <List
          type="ul"
          data-list-id="mark"
          items={[
            "In-house Design-system to serve multiple frameworks - React, React Native and Svelte - that we use across our projects",
            "Tailor-made build systems and scaffolding tools because setting up new projects and the infrastructure is always a pain",
            "Evangelise tech and share knowledge internally and in external forums 🤝",
            "UI builder for creating custom checkout pages, payment buttons and more",
            "GraphQL that serves as the API gateway for all frontend apps",
          ]}
        />
      </Container>
    </StyledAbout>
  );
};

export default About;
