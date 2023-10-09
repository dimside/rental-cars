import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop-color);
  z-index: 999;
`;

export const ModalCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 541px;
  height: 752px;
  border-radius: 24px;
  background-color: #fff;
  padding: 40px;
`;

export const ImgContainer = styled.div`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 248px;
`;

export const CrossIcon = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background-color: transparent;
  stroke: var(--text-primary);

  &:hover {
    scale: 1.2;
    stroke: var(--hover-color);
  }
`;

export const Title = styled.h2`
  font-family: ManropeMedium;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 8px;
  & span {
    color: var(--model-name);
  }
`;

export const CarInfoWrap = styled.ul`
  display: flex;
  align-items: center;
  color: var(--text-secondary);
  font-size: 12px;
  line-height: 18px;

  & :last-child > svg {
    display: none;
  }
`;

export const Description = styled.p`
  width: 100%;
  height: 40px;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 24px;
  overflow: hidden;
`;

export const Subtitle = styled.h3`
  font-family: ManropeMedium;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const InfoItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 18px;
  overflow: hidden;

  & p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const ConditionWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  height: 32px;
`;

export const ConditionItem = styled.p`
  max-width: 225px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: var(--condition-color);
  border-radius: 16px;
  padding: 7px 14px;
  color: var(--condition-text);
  font-size: 12px;
  line-height: 18px;
`;

export const RentalButton = styled.a`
  display: block;
  width: 168px;
  height: 44px;
  padding: 12px 50px;
  background-color: var(--button-color);
  border-radius: 12px;
  color: var(--button-text);
  font-family: ManropeSemiBold;
  font-size: 14px;
  line-height: 20px;

  &:hover {
    background-color: var(--hover-color);
  }
`;

export const Value = styled.span`
  color: var(--value-color);
`;
