//react import
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//styled import
import { HiOutlineX } from "react-icons/hi";
import "./Explain.css";
import "./ExplainWaiting.css";
import {
  __GetTodaymission,
  __GetDailymission,
  __GetWeeklymission,
} from "../../../Redux/modules/mission";
import Slide from "react-reveal/Slide";
//component import
import LoadingBar from "../../../Components/LoadingBar/LoadingBar";

const ExplainWaiting = ({ onClickToast }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 로딩 상태값
  const [loding, setLoding] = useState(false);
  // 미션 번호 & 미션 분류
  const paramsNum = useParams().id.split("&")[0];
  const paramsCategory = useParams().id.split("&")[1];
  // 미션 값
  const select = useSelector((state) =>
    paramsCategory === "challenge"
      ? state.mission.challenge[0]
      : paramsCategory === "daily"
      ? state.mission.daily.filter((item) => item.missionId == paramsNum)[0]
      : state.mission.weekly.filter((item) => item.missionId == paramsNum)[0]
  );
  // 미션 분류에 따른 적립 포인트
  const pointNum =
    paramsCategory === "challenge" ? 30 : paramsCategory === "weekly" ? 20 : 10;
  useEffect(() => {
    setLoding(true);
    paramsCategory === "challenge"
      ? dispatch(__GetTodaymission())
      : paramsCategory === "daily"
      ? dispatch(__GetDailymission())
      : dispatch(__GetWeeklymission());
    setLoding(false);
  }, [dispatch]);
  return (
    <>
      {!loding && select ? (
        <>
          <Slide bottom>
            <div className="explain-wrap-shape">
              <div className="explain-mission-close-button-area">
                <div
                  className="explain-mission-close-button"
                  onClick={() => navigate("/mission")}
                >
                  <HiOutlineX />
                </div>
              </div>
              <div className="explain-mission-name-and-tag-area">
                <div className="explain-mission-name-text">
                  {select ? select.missionName : "MissionName"}
                </div>
                <div className="explain-mission-tag-text">
                  {select ? select.tag : "#Tag"}
                </div>
                <p className="explain-mission-contents-text">
                  {select
                    ? select.missionContent
                    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, proin a neque vel facilisi vel tempor etiam. Lorem vitae ut ac auctor."}
                </p>
              </div>

              <div className="explain-mission-center-area">
                <img
                  src="/images/WaitingLeaf.png"
                  className="explain-mission-waiting-logo"
                ></img>
                <img
                  src={select.missionImageUrl}
                  className="explain-mission-waiting-png"
                ></img>

                <div className="explain-mission-center-point-text">
                  {`예상 걸음치는 +${pointNum}걸음 입니다.`}
                </div>
              </div>
              <div
                className="explain-waiting-bar"
                onClick={() => {
                  navigate("/mission");
                  onClickToast(`예상 걸음치 (+${pointNum}걸음)`, 1);
                }}
              >
                인증 대기중
              </div>
              <p className="explain-text">인증까지 평균 1시간 소요됩니다</p>
            </div>
          </Slide>
        </>
      ) : (
        <LoadingBar />
      )}
    </>
  );
};

export default ExplainWaiting;
