import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 30px;
`;

export const FilterWrap = styled.div`
  width: 859px;
  height: 74px;
  margin: 0 auto;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  color: var(--label-text);
  font-family: ManropeMedium;
  font-size: 14px;
  line-height: 18px;
`;

export const BrandPlug = styled.div`
  position: absolute;
  top: 27px;
  left: 1px;
  display: flex;
  width: 222px;
  height: 46px;
  border-radius: 14px;
  padding: 14px 8px 14px 18px;
  margin-right: 18px;
  background-color: var(--input-bcg);
  pointer-events: none;

  & p {
    color: var(--text-primary);
    font-family: ManropeMedium;
    font-size: 18px;
    line-height: 20px;
    margin-right: 51px;
  }

  & svg {
    transform: rotate(180deg);
  }
`;

export const BrandInput = styled.select`
  width: 224px;
  height: 48px;
  border-radius: 14px;
  padding: 14px 8px 14px 18px;
  margin-right: 18px;
  background-color: var(--input-bcg);
  border: none;

  color: var(--select-text);
  font-family: ManropeMedium;
  font-size: 16px;
  line-height: 20px;

  &:hover,
  focus {
    border: 1px solid var(--hover-color);
    outline: none;
  }

  &:focus + div svg {
    transform: rotate(0deg);
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(#1214170d);
    border-radius: 4px;
  }
`;

export const Placeholder = styled.p`
  position: absolute;
  top: 40px;
  left: 24px;
  color: var(--text-primary);
  font-family: ManropeMedium;
  font-size: 18px;
  line-height: 20px;
`;

export const FromInput = styled.input`
  width: 160px;
  height: 48px;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  padding: 14px 10px 14px 70px;
  background-color: var(--input-bcg);
  border-color: transparent;
  color: var(--text-primary);
  font-family: ManropeMedium;
  font-size: 18px;
  line-height: 20px;

  &:hover,
  focus {
    border: 1px solid var(--hover-color);
    outline: none;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const ToInput = styled.input`
  width: 160px;
  height: 48px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  padding: 14px 10px 14px 50px;
  margin-right: 18px;
  background-color: var(--input-bcg);
  border-color: transparent;
  border-left: 1px solid rgba(138, 138, 137, 0.2);

  color: var(--text-primary);
  font-family: ManropeMedium;
  font-size: 18px;
  line-height: 20px;

  &:hover,
  focus {
    border: 1px solid var(--hover-color);
    outline: none;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Button = styled.button`
  align-self: flex-end;
  width: 136px;
  height: 48px;
  border-radius: 12px;
  padding: 14px 44px;
  border: none;
  background-color: var(--button-color);

  color: var(--button-text);
  font-family: ManropeSemiBold;
  font-size: 14px;
  line-height: 20px;

  &:hover {
    background-color: var(--hover-color);
  }
`;
