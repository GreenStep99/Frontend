//react import
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
//styled import
import OnDot from '../../static/components/Login/OnDot';
import NonDot from '../../static/components/Login/NonDot';
import {
  ModalBody,
  ModalSection,
  DotArea,
  SlideLeftDiv,
  SlideRightDiv,
} from './ModalStyled';
//modules import
import { getUserInfoThunk } from '../../Redux/modules/userInfoSlice';

//component import
import FirstModal from './Modal/FirstModal/FirstModal';
import SecondModal from './Modal/SecondModal/SecondModal';
import ThirdModal from './Modal/ThirdModal/ThirdModal';
import FourthModal from './Modal/FourthModal/FourthModal';
import LoadingBar from '../../Components/LoadingBar/LoadingBar';
import instance from '../../Redux/modules/instance';

const Modal = ({ onClickToast }) => {
  const user = useSelector((state) => state.userInfo.userInfo);
  const [loading, setLoading] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [display, setDisplay] = useState(0);
  const [img, setImg] = useState('');
  const [check, setCheck] = useState(0);
  const [name, setName] = useInput(user.name);
  const [nickname, setNickname] = useInput(user.nickname);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getUserInfoThunk());
    setLoading(false);
  }, [dispatch]);
  // 이미 가입한 상태로 접근 방지
  useEffect(() => {
    instance.get('users/info').then((res) => {
      if (res.data.data.nickname) {
        navigate('/mission');
        onClickToast('이미 가입한 계정입니다.')
      }
    });
  }, []);
  return !loading ? (
    <>
      <ModalBody>
        <ModalSection>
          {display === 1 || display === 0 ? (
            <FirstModal
              display={display}
              setDisplay={setDisplay}
              setImg={setImg}
              check={check}
              setCheck={setCheck}
              user={user}
              setNickname={setNickname}
              onClickToast={onClickToast}
            />
          ) : display === 2 ? (
            <SecondModal
              display={display}
              setDisplay={setDisplay}
              setImg={setImg}
              img={img}
              second={second}
              setSecond={setSecond}
              onClickToast={onClickToast}
            />
          ) : display === 3 ? (
            <ThirdModal
              display={display}
              setDisplay={setDisplay}
              setImg={setImg}
              check={check}
              setName={setName}
              setNickname={setNickname}
              nickname={nickname}
              name={name}
              img={img}
              third={third}
              setThird={setThird}
              onClickToast={onClickToast}
              user={user}
            />
          ) : display === 4 ? (
            <FourthModal
              display={display}
              setDisplay={setDisplay}
              setImg={setImg}
              check={check}
              setName={setName}
              setNickname={setNickname}
              nickname={nickname}
              name={name}
              img={img}
              user={user}
              onClickToast={onClickToast}
            />
          ) : null}
          {/* 상태창 애니메이션 */}
          <DotArea>
            {display === 0 ? (
              <>
                <NonDot />
                <OnDot />
                <OnDot />
              </>
            ) : display === 4 && !fourth ? (
              <>
                <>
                  <OnDot />
                </>{' '}
                <SlideLeftDiv>
                  <OnDot />
                </SlideLeftDiv>
                <SlideRightDiv>
                  <NonDot />
                </SlideRightDiv>
              </>
            ) : display === 3 && third ? (
              <>
                <OnDot />
                <SlideLeftDiv>
                  <NonDot />
                </SlideLeftDiv>
                <SlideRightDiv>
                  <OnDot />
                </SlideRightDiv>
              </>
            ) : display === 3 && !third ? (
              <>
                {' '}
                <SlideLeftDiv>
                  <OnDot />
                </SlideLeftDiv>
                <SlideRightDiv>
                  <NonDot />
                </SlideRightDiv>{' '}
                <OnDot />
              </>
            ) : (display === 1 || display === 2) && !second ? (
              <>
                <SlideLeftDiv>
                  <NonDot />
                </SlideLeftDiv>
                <SlideRightDiv>
                  <OnDot />
                </SlideRightDiv>
                <OnDot />
              </>
            ) : (display === 1 || display === 2) && second ? (
              <>
                <SlideLeftDiv>
                  <NonDot />
                </SlideLeftDiv>
                <SlideRightDiv>
                  <OnDot />
                </SlideRightDiv>
                <OnDot />
              </>
            ) : null}
            {/* 상태창 애니메이션 */}
          </DotArea>
        </ModalSection>
      </ModalBody>
    </>
  ) : (
    <LoadingBar />
  );
};

export default Modal;
