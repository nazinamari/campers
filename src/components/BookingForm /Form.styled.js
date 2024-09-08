import styled from "styled-components";

export const SecondWrapper = styled.div`
  width: 448px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  padding: 24px;
`;

export const FormTitle = styled.h2`
  color: #101828;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px; /* 120% */
`;

export const FormText = styled.p`
  color: #475467;
  margin-top: 8px;
  margin-bottom: 24px;
  font-family: Inter;
  font-size: 16px;

  line-height: 24px; /* 150% */
`;

export const Input = styled.input`
  width: 400px;
  height: 56px;
  border-radius: 10px;
  background-color: #f7f7f7;
  border: none;
  margin-bottom: 14px;
  padding: 18px;

  color: rgba(16, 24, 40, 0.6);

  font-family: Inter;
  font-size: 16px;
  line-height: 20px;
`;

export const TextField = styled.textarea`
  background: #f7f7f7;
  width: 400px;
  height: 114px;
  border: none;
  padding: 18px;
  border-radius: 10px;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  padding: 16px 60px;
  border-radius: 200px;
  background: #e44848;
  border: none;
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.08px;
  cursor: pointer;

  &:hover {
    background-color: #d84343;
  }
`;
