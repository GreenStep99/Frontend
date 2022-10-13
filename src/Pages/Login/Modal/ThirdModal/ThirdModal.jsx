//react import
import React, { useEffect, useState } from "react";
//styled import
import {
  ModalHeader,
  TopText,
  SelectBody,
  ButtonText,
  CenterContainer,
  ProfileImg,
  TextInput,
  ProfileArea,
  PencilDiv,
  PencilIcon,
  InputDiv,
  WarningText,
  ErrorText,
  WarningDiv,
} from "./ThirdModalStyled";
const ThirdModal = ({
  setDisplay,
  setNickname,
  setName,
  name,
  check,
  nickname,
  img,
  third,
  setThird,
  onClickToast,
  user,
}) => {
  const [valid, setValid] = useState({ name: "empty", nickname: "empty" });

  const NextModal = () => {
    setDisplay(4);
    setThird(true);
  };
  const OnFirst = () => {
    setDisplay(1);
    setThird(false);
  };
  const OnSecond = () => {
    setDisplay(2);
    setThird(false);
  };

  const krEg = /^[A-Za-z0-9가-힣]{1,8}$/;
  const korean = /^[가-힣]{2,8}$/;
  const numberMaxLength = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  };

  useEffect(() => {
    if (name === "") {
      setValid((prev) => {
        return { ...prev, name: "empty" };
      });
    } else {
      if (!korean.test(name ? name : user.name)) {
        setValid((prev) => {
          return { ...prev, name: "error" };
        });
      } else {
        setValid((prev) => {
          return { ...prev, name: "success" };
        });
      }
    }
  }, [name]);

  useEffect(() => {
    if (nickname === "") {
      setValid((prev) => {
        return { ...prev, nickname: "empty" };
      });
    } else {
      if (!krEg.test(nickname)) {
        setValid((prev) => {
          return { ...prev, nickname: "error" };
        });
      } else {
        setValid((prev) => {
          return { ...prev, nickname: "success" };
        });
      }
    }
  }, [nickname]);
  return (
    <>
      <ModalHeader>
        <ButtonText onClick={() => (check == 1 ? OnFirst() : OnSecond())}>
          이전
        </ButtonText>
        <TopText>닉네임 설정</TopText>
        <ButtonText
          onClick={() => {
            korean.test(name ? name : user.name) && krEg.test(nickname)
              ? NextModal()
              : onClickToast("입력 칸을 확인해주세요");
          }}
        >
          다음
        </ButtonText>
      </ModalHeader>

      <SelectBody third={third}>
        <CenterContainer>
          <ProfileArea>
            <ProfileImg src={img} />
            <InputDiv color={valid.name === "error" ? "#E1756E" : "#B2E2AB"}>
              <TextInput
                color={name ? "#B2E2AB" : "#C3C2C2 "}
                onChange={setName}
                defaultValue={user.name}
                placeholder="이름"
                maxLength={8}
                onInput={numberMaxLength}
                type="text"
              />

              <PencilDiv>
                <PencilIcon
                  color={valid.name === "error" ? "#E1756E" : "#B2E2AB"}
                />
              </PencilDiv>
            </InputDiv>
            <WarningDiv>
              {
                {
                  empty: <WarningText></WarningText>,
                  error: <ErrorText>이름은 한글만 입력해주세요.</ErrorText>,
                  success: (
                    <WarningText>최대 8글자인 한글만 가능합니다.</WarningText>
                  ),
                }[valid.name]
              }
            </WarningDiv>

            <InputDiv
              color={valid.nickname === "error" ? "#E1756E" : "#B2E2AB"}
            >
              <TextInput
                color={nickname ? "#B2E2AB" : "#C3C2C2"}
                onChange={setNickname}
                value={nickname}
                placeholder="닉네임"
                maxLength={8}
                onInput={numberMaxLength}
                type="text"
              />
              <PencilDiv>
                <PencilIcon
                  color={valid.nickname === "error" ? "#E1756E" : "#B2E2AB"}
                />
              </PencilDiv>
            </InputDiv>
            <WarningDiv>
              {
                {
                  empty: <WarningText></WarningText>,
                  error: (
                    <ErrorText>아이디는 한글 or 영어로 입력해주세요.</ErrorText>
                  ),
                  success: (
                    <WarningText>
                      최대 8글자까지인 한글 or 영어만 가능합니다.
                    </WarningText>
                  ),
                }[valid.nickname]
              }
            </WarningDiv>
          </ProfileArea>
        </CenterContainer>
      </SelectBody>
    </>
  );
};

export default ThirdModal;
