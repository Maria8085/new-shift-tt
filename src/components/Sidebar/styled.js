import styled from "styled-components";

export const Wrapper = styled.div`
  width: 330px;
  background: #343c59;
  border-radius: 24px;
  padding: 0 24px;
  color: rgba(255, 255, 255, 0.7);
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  list-style: none;
  font-family: "Inter";
  font-size: 16px;
  padding: 24px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const TitleItem = styled.h6`
  font-family: "Inter";
  font-size: 16px;
  margin: 0;
  margin-bottom: 12px;
`;

export const ShowMore = styled.button`
  border: none;
  background: transparent;
  color: #fc620f;
  font-family: "Inter";
  font-size: 16px;
  padding: 0;
  margin-top: 16px;
  font-weight: 600;
`;

export const ResetFilters = styled.button`
  width: 100%;
  padding: 12px 0;
  margin: 24px 0;
  color: rgba(255, 255, 255, 0.7);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.7);
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  border-radius: 32px;
`;
