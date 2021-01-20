import React, { useContext } from "react";
import ConditionInfo from "../atoms/ConditionInfo";
import temperature from "../../assets/icons/temperature.svg";
import humidity from "../../assets/icons/humidity.svg";
import RootContext from "../../context";
import { StyledConditionsWrapper } from "../styles/StyledAppHeaderConditions";

const AppHeaderConditions = () => {
  const context = useContext(RootContext);
  const { roomCondition } = context;
  return (
    <>
      <StyledConditionsWrapper>
        <ConditionInfo
          img={temperature}
          detail={roomCondition.temp}
          text="temp"
        />
        <ConditionInfo
          img={humidity}
          detail={roomCondition.humidity}
          text="humidity"
        />
      </StyledConditionsWrapper>
    </>
  );
};

export default AppHeaderConditions;
