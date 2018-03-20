import React from "react";
import styled from "styled-components";

const ratio = 1.4262295;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => Math.floor(props.height / ratio)}px;
  height: ${props => props.height}px;
  justify-content: space-between;
  border: 0.125rem solid;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  border-radius: ${props => Math.floor(props.height / 20)}px;
  background: white;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CardLabel = styled.span`
  margin: 0.5rem;
`;

const Card = ({ suit, number }) => (
  <CardContainer height="200">
    <TopRow>
      <CardLabel>{number}</CardLabel>
    </TopRow>
    <div>Middle</div>
    <BottomRow>
      <CardLabel>{number}</CardLabel>
    </BottomRow>
  </CardContainer>
);

export default Card;
