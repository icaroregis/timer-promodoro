import styled from "styled-components";
import { convertPixelsToRem } from "../../utils";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme["gray-100"]};
      border-top: ${convertPixelsToRem(3)} solid transparent;
      border-bottom: ${convertPixelsToRem(3)} solid transparent;

      &:hover {
        border-bottom: ${convertPixelsToRem(3)} solid
          ${({ theme }) => theme["green-500"]};
      }

      &.active {
        color: ${({ theme }) => theme["green-500"]};
      }
    }
  }
`;
