//react import
import React from "react";
import { useNavigate } from "react-router";
//styled import
import {
  DailyBody,
  MissionPhoto,
  MissionText,
  WatingBody,
} from "./WatingStyled";

const Wating = ({ item, type }) => {
  const navigate = useNavigate();
  return (
    <DailyBody
      onClick={() =>
        type == "daily"
          ? navigate(`/explainwaiting/${item.missionId}&daily`)
          : navigate(`/explainwaiting/${item.missionId}&weekly`)
      }
    >
      <WatingBody>인증 대기중</WatingBody>
      <MissionPhoto src={item.missionIconUrl} />
      <MissionText>{item.missionName}</MissionText>
    </DailyBody>
  );
};

export default Wating;
