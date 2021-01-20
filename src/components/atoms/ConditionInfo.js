import React from "react";
import {
  StyledConditionWrapper,
  StyledImageWrapper,
  StyledImage,
  StyledDetailWrapper,
  StyledDetail,
  StyledText,
} from "../styles/StyledConditionInfo";

const ConditionInfo = ({ img, detail, text }) => {
  return (
    <StyledConditionWrapper>
      <StyledImageWrapper>
        <StyledImage src={img} alt="condition img" />
      </StyledImageWrapper>
      <StyledDetailWrapper>
        <StyledDetail>
          {detail}
          {text === "temp" ? "°C" : "%"}{" "}
        </StyledDetail>
        <StyledText>{text}</StyledText>
      </StyledDetailWrapper>
    </StyledConditionWrapper>
  );
};

export default ConditionInfo;
