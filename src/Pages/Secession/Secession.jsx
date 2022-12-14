//react impoty
import { useNavigate } from "react-router-dom";
//component import
import { IoIosArrowBack } from "react-icons/io";
import "./Secession.css";
import Secessionimg from "../../static/components/Secessionimg";
import instance from "../../Redux/modules/instance";

const Secession = ({ onClickToast }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="secession-back-arrow-area">
        <div onClick={() => navigate("/mypage")}>
          <IoIosArrowBack className="secession-back-arrow-icon" />
        </div>
        <div className="secession-title-text">탈퇴하기</div>
        <div className="secession-header-dummy"></div>
      </div>
      <div className="wrap-secession">
        <div className="secession-quit-text">
          그린스텝과 지구를 지키는 일을 <br />
          중단하실 건가요?
        </div>
        <div className="secession-quit-image">
          <Secessionimg />
        </div>
        <button
          className="secession-quit-button"
          onClick={() => {
            instance.post("/kakao/unregister").then((res) => {
              if (res.data.data) {
                window.localStorage.clear();
                window.sessionStorage.clear();
              }
              navigate("/");
              onClickToast(`탈퇴 되었습니다.`, 1);
            });
          }}
        >
          네, 저 혼자 지구를 지키겠습니다
        </button>
      </div>
    </>
  );
};

export default Secession;
