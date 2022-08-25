import styled from "styled-components";

export const CardListWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 24px;
  padding: 24px;
  .item-card {
    flex-grow: 6;
    margin: 10px 24px;
    width: 268px;
    max-width: 268px;
  }
`;
