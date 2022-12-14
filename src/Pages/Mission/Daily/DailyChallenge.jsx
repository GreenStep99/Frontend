//react import
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//redux import
import { __GetTodaymission } from '../../../Redux/modules/mission';
//styled import
import {
  ChallengeBox,
  ChallengeTextArea,
  ChallengeBody,
  ChallengePhoto,
  MissionText,
  WatingText,
  ChallengeTitle,
  ChallengeTimer,
  ChallengeWaiting,
  ChallengeMissionText,
  LeapDiv,
} from './DailyMissionStyled';
//component import
import ChallengeSkeleton from '../../../Components/Skeleton/ChallengeSkeleton';
import MissionLeap from '../../../static/components/MissionLeap';

const DailyChallenge = ({ mission }) => {
  const navigate = useNavigate();
  const [hour, setHour] = useState(23 - new Date().getHours());
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  const [second, setSecond] = useState(59 - new Date().getSeconds());

  useEffect(() => {
    const id = setInterval(() => {
      setHour(23 - new Date().getHours());
      setMinute(59 - new Date().getMinutes());
      setSecond(59 - new Date().getSeconds());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {mission ? (
        <ChallengeBox>
          <ChallengeTextArea>
            <ChallengeTitle>챌린지 미션</ChallengeTitle>
            <ChallengeMissionText title={mission.missionName}>
              {mission.missionName}
            </ChallengeMissionText>
            <ChallengeTimer>
              미션 완료까지&nbsp;&nbsp;
              {hour < 10 ? '0' + hour : hour}:
              {minute < 10 ? '0' + minute : minute}:
              {second < 10 ? '0' + second : second}
            </ChallengeTimer>
          </ChallengeTextArea>
          <ChallengeBody
            onClick={() =>
              mission.status === 'DEFAULT' || mission.status === 'REJECTED'
                ? navigate(`/explain/${mission.missionId}&challenge`)
                : mission.status === 'WAITING'
                ? navigate(`explainwaiting/${mission.missionId}&challenge`)
                : null
            }
          >
            {mission.status === 'WAITING' ? (
              <ChallengeWaiting>
                <WatingText>인증 대기중</WatingText>
              </ChallengeWaiting>
            ) : mission.status === 'DONE' ? (
              <ChallengeWaiting>
                <LeapDiv>
                  <MissionLeap />
                </LeapDiv>
              </ChallengeWaiting>
            ) : null}

            <ChallengePhoto src={mission.missionIconUrl} />
          </ChallengeBody>
        </ChallengeBox>
      ) : (
        <ChallengeSkeleton />
      )}
    </>
  );
};

export default DailyChallenge;
