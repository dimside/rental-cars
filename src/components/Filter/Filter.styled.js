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

export const BrandInput = styled.select`
  width: 224px;
  height: 48px;
  border-radius: 14px;
  padding: 14px 8px 14px 18px;
  margin-right: 18px;
  background-color: var(--input-bcg);
  border: 1px solid rgba(18, 20, 23, 0.05);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  color: var(--select-text);
  font-family: ManropeMedium;
  font-size: 16px;
  line-height: 20px;

  &:hover {
    border-color: var(--hover-color);
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
