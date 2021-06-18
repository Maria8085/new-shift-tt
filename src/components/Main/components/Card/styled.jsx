import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1038px;
  height: 308px;
  background: #fff;
  box-shadow: 0px 45px 109px rgba(0, 0, 0, 0.1),
    0px 10.0513px 24.3466px rgba(0, 0, 0, 0.0596107),
    0px 2.99255px 7.24861px rgba(0, 0, 0, 0.0403893);
  border-radius: 24px;
  margin: 8px 0;
  display: flex;
`;

export const WrapperImage = styled.div`
  width: 330px;
  height: 260px;
  margin: 24px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Description = styled.div`
  margin: 24px 0 24px 8px;
`;

export const Title = styled.h3`
  font-family: "TenorSans";
  font-size: 24px;
  color: #151513;
  margin: 0 0 16px;
`;

export const Address = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

export const ItemAddress = styled.div`
  font-family: "Inter";
  font-size: 16px;
  margin-right: 32px;
`;

export const Info = styled.div`
  display: flex;
`;

export const ItemInfo = styled.div`
  margin-right: 24px;
`;

export const Price = styled.div``;

export const FullPrice = styled.p`
  font-family: "TenorSans";
  font-size: 24px;
  color: #151513;
`;

export const PartialPrice = styled.p`
  font-size: 12px;
  color: #5c5a55;
`;

export const Buttons = styled.div`
  display: flex;
`;

export const Views = styled.button`
  font-family: "InterSemiBold";
  color: #fff;
  background: #fc620f;
  border: 1px solid #fc620f;
  border-radius: 32px;
  padding: 10px 15px;
  margin-right: 8px;
`;

export const Details = styled.button`
  font-family: "InterSemiBold";
  background: #fff;
  color: #fc620f;
  border: 1px solid #fc620f;
  border-radius: 32px;
  padding: 10px 15px;
`;
