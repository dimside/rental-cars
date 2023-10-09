import styled from '@emotion/styled';
import { ReactComponent as Vector } from '../../assets/images/icons/vector.svg';
import { ReactComponent as Heart } from '../../assets/images/icons/heart.svg';

export const AdvertItem = styled.li`
  width: 274px;
  height: 426px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;
  background-color: #4D5AE530;
`;

export const HeartIcon = styled(Heart)`
  position: absolute;
  top: 14px;
  right: 14px;
  fill: ${({ fill }) => fill};
  stroke: ${({ stroke }) => stroke};

  &:hover {
    scale: 1.3;
  }
`;

export const Image = styled.img`
  height: 100%;
  object-fit: ${({ fitType }) => fitType};
`;

export const CarInfoCantainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: ManropeMedium;
  line-height: 24px;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-size: inherit;
  font-weight: inherit;
`;

export const Model = styled.span`
  color: var(--model-name);
`;

export const AdvertInfoContainer = styled.ul`
  display: flex;
  width: 100%;
  height: 18px;
  font-family: Manrope;
  font-size: 12px;
  line-height: 18px;
  color: var(--text-secondary);
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const VectorIcon = styled(Vector)`
  margin: 0 6px;
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 12px;
  background-color: var(--button-color);
  color: var(--button-text);
  text-align: center;
  font-family: ManropeSemiBold;
  font-size: 14px;
  line-height: 20px;

  &:hover {
    background-color: var(--hover-color);
  }
`;
