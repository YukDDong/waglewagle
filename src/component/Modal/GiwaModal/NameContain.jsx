import React from 'react';
import { ReactComponent as Booklet } from "./../../../assets/booklet.svg"
import styled from 'styled-components';
import SelectTitle from './../../../component/SelectTitle/SelectTitle'

const NameContain = () => {
  return (
    <NameWrap>
      <Booklet />
      <NameInput>
        <SelectTitle title={"어떤 호명으로 등록이 되고 싶은가? \n 최대 8글자만 사용 가능하다네."} fontSize="18px" weight={500} />
      </NameInput>
    </NameWrap>
  );
};

export default NameContain;

const NameWrap = styled.div`
  display: flex;
  > svg {
    min-width: 578px;
    min-height: 357px;
  }
`;

const NameInput = styled.div`
  
`;  