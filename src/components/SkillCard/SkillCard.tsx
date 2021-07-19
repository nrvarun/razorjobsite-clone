import { Heading3, Paragraph } from "@components/Typography";
import { FC } from "react";
import {
  StyledSkillCard,
  StyledSkillCardContentWrapper,
} from "./SkillCard.style";

interface SkillCardProps {
  title: string;
  desc: string;
}

const SkillCard: FC<SkillCardProps> = ({ title, desc }) => {
  return (
    <StyledSkillCard>
      <StyledSkillCardContentWrapper>
        <Heading3 text={title} />
        <Paragraph text={desc} />
      </StyledSkillCardContentWrapper>
    </StyledSkillCard>
  );
};

export default SkillCard;
