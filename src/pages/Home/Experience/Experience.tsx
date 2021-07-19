import Container from "@components/Container";
import SkillCard from "@components/SkillCard";
import { Heading1, Heading3, Paragraph } from "@components/Typography";
import { FC } from "react";
import {
  StyledExperience,
  StyledSkillsList,
  StyledSkillsListItem,
} from "./Experience.style";

const Experience: FC = () => {
  return (
    <StyledExperience>
      <Container>
        <Heading1 text="Interview Process" />
        <Paragraph
          text=" We've crafted our process to ensure we don't drain you out with plain
          old scripted questions. Rather, we focus on what you would do daily at
          Razorpay."
        />
        <Paragraph
          text="Our process is divided into 4 steps and none of them involves
          questions around Data Structures and Algorithms"
        />
        <StyledSkillsList>
          <StyledSkillsListItem>
            <SkillCard
              title="1. DISCOVER"
              desc="Talk about your past projects, areas of interests and ambitions/passion with our team"
            />
          </StyledSkillsListItem>
          <StyledSkillsListItem>
            <SkillCard
              title="2. DISCOVER"
              desc="Talk about your past projects, areas of interests and ambitions/passion with our team"
            />
          </StyledSkillsListItem>
          <StyledSkillsListItem>
            <SkillCard
              title="3. DISCOVER"
              desc="Talk about your past projects, areas of interests and ambitions/passion with our team"
            />
          </StyledSkillsListItem>
          <StyledSkillsListItem>
            <SkillCard
              title="4. DISCOVER"
              desc="Talk about your past projects, areas of interests and ambitions/passion with our team"
            />
          </StyledSkillsListItem>
        </StyledSkillsList>
      </Container>
    </StyledExperience>
  );
};

export default Experience;
