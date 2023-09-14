import React from "react";
import styled from "styled-components";

const WriteGuestText = () => {
  return (
    <Container>
      <TextArea />
    </Container>
  );
};

export default WriteGuestText;

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 36px 0;
  display: flex;
`;

const TextArea = styled.textarea`
  width: 616px;
  height: 324px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background-color: rgba(245, 245, 245, 0.2);
`;
