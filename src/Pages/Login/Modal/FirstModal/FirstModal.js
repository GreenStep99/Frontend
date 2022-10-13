//react import
import React from 'react';
//styled import
import {
  ModalHeader,
  TopText,
  SelectBody,
  ImgArea,
  SelectImg,
  SeleceArea,
  ImgDiv,
  ButtonText,
  DummyText,
  SelectText,
} from './FirstModalStyled';
import { useState } from 'react';

const FirstModal = ({
  setDisplay,
  setImg,
  setCheck,
  check,
  user,
  setNickname,
  onClickToast,
}) => {
  const [slide, setSlide] = useState(false);
  const Next = () => {
    check === 1 ? setDisplay(3) : setDisplay(2);
    setSlide(true);
    setNickname(user.nickname);
  };
  return (
    <>
      <ModalHeader>
        <DummyText></DummyText>
        <TopText>프로필 선택</TopText>
        <ButtonText
          onClick={() => {
            check === 0 ? onClickToast('선택해주세요') : Next();
          }}
          check={check}
        ></ButtonText>
      </ModalHeader>
      <SelectBody slide={slide}>
        <ImgArea>
          <SeleceArea>
            <ImgDiv>
              <SelectImg
                src={
                  user.profilePhoto
                    ? user.profilePhoto
                    : 'https://blog.kakaocdn.net/dn/Sq4OD/btqzlkr13eD/dYwFnscXEA6YIOHckdPDDk/img.jpg'
                }
                onClick={() => {
                  check === 1 ? setCheck(0) : setCheck(1);
                  !user.profilePhoto
                    ? setImg(
                        'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
                      )
                    : setImg(user.profilePhoto);
                  setDisplay(3);
                }}
                check={check}
                num={1}
              />
              <SelectText>카카오톡 프로필</SelectText>
            </ImgDiv>

            <ImgDiv>
              <SelectImg
                src="images/펭귄.png"
                onClick={() => {
                  check === 2 ? setCheck(0) : setCheck(2);
                  setDisplay(2);
                }}
                check={check}
                num={2}
              />
              <SelectText>프로필 캐릭터 선택</SelectText>
            </ImgDiv>
          </SeleceArea>
        </ImgArea>
      </SelectBody>
    </>
  );
};

export default FirstModal;
