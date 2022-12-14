import styled from "styled-components";

export const DailyBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 6px 0;
  width: 145px;
  height: 170px;
  border-radius: 5px;
  background: #fcfcfa;
  box-shadow: 0px 2px 2px rgba(134, 134, 134, 0.3);
  &:hover {
    cursor: pointer;
  }

  display: flex;
  justify-content: space-between;
`;

export const MissionPhoto = styled.img`
  width: 145px;
  height: 144px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.5);
`;
export const MissionText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "AppleNeoR";
  font-size: 13px;
  line-height: 16px;
  color: #50674c;
  flex-wrap: wrap;
  margin-top: 9px;
`;
export const ChallengeMissionText = styled.div`
  display: flex;
  font-family: "AppleNeoM";
  font-size: 15px;
  font-weight: 600;
  line-height: 16px;
  color: #50674c;
  flex-wrap: wrap;
  margin-top: 8px;
  margin-left: 4px;
`;

export const ChallengeBox = styled.div`
  height: 178px;
  display: flex;
  padding: 0px 0px 0px 15px;
  justify-content: space-between;
  background: linear-gradient(
    269.82deg,
    rgba(178, 226, 171, 0.2) 0.17%,
    rgba(249, 253, 249, 0.15) 78.05%,
    rgba(249, 253, 249, 0.1) 99.85%
  );
  box-shadow: 0px 4px 4px rgba(134, 134, 134, 0.3);
  border-radius: 7px;
  margin: 14px 0px 0px 0px;
`;

export const ChallengeTextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChallengeBody = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;
export const ChallengeWaiting = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  margin: 0px 0px 0px -163px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 195%;
  height: 100%;
  border-radius: 5px;
  text-align: center;
`;

export const ChallengePhoto = styled.img`
  width: 171px;
  height: 173px;
  padding: 2px 0px 0px 0px;
`;
export const ChallengeTitle = styled.div`
  font-family: "AppleNeoM";
  font-size: 13px;
  line-height: 16px;
  padding: 9px 0px 0px 0px;
  margin: 8px 0px 0px 4px;
  color: #50674c;
`;
export const ChallengeTimer = styled.div`
  width: 149px;
  height: 36px;
  font-family: "AppleNeoM";
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  padding: 10px 1px;
  margin: 72px -2px;
  color: white;
  background: #ade2e9;
  border-radius: 5px;
`;

export const LeapDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const WatingText = styled.div`
  font-family: "AppleNeoM";
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #fcfcfa;
`;
