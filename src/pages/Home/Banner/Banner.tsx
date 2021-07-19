import Container from "@components/Container";
import { Heading1, Heading2 } from "@components/Typography";
import { StyledBanner, StyledBannerLogo } from "./Banner.style";

const Banner = () => {
  return (
    <StyledBanner>
      <Container>
        <Heading1>
          <span>Join Frontend at</span>{" "}
          <StyledBannerLogo
            src="https://cdn.razorpay.com/logo_invert.svg"
            alt="razorpay logo"
          />
        </Heading1>
        <Heading2>
          Looking for amazing work, culture and an equally amazing interview
          experience? Let's make it happen! 🤝
        </Heading2>
      </Container>
    </StyledBanner>
  );
};

export default Banner;
