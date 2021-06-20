import styled from "styled-components";
import { Swiper } from "swiper/react";
import Arrow from "../../../images/Arrow.svg";

export const StyledSwiper = styled(Swiper)`
  border-radius: 8px;
  .swiper-button-prev {
    background-image: url(${Arrow});
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(180deg);
    bottom: 10px;
    top: unset;
    &:after {
      content: "";
    }
  }
  .swiper-button-next {
    background-image: url(${Arrow});
    background-repeat: no-repeat;
    background-position: center;
    bottom: 10px;
    top: unset;
    &:after {
      content: "";
    }
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      background: rgba(255, 255, 255, 0.56);
      opacity: 1;
      &.swiper-pagination-bullet-active {
        background: #fc620f;
        transform: scale(1.5);
      }
    }
  }
  .swiper-slide {
    position: relative;
    &:after {
      content: "";
      display: block;
      bottom: 3px;
      border-radius: 0 0 10px 10px;
      top: 40%;
      left: 0;
      right: 0;
      background: linear-gradient(to top, #0008 0%, transparent 100%);
      position: absolute;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
