import styled from "styled-components";
import { convertPixelsToRem } from "../../utils";

export const HomeContainer = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${convertPixelsToRem(56)};
  }
`;

const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: ${convertPixelsToRem(16)};
  border-radius: ${convertPixelsToRem(8)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme["gray-100"]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountDownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme["green-500"]};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["green-700"]};
  }
`;

export const StopCountDownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme["red-500"]};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["red-700"]};
  }
`;
