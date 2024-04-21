import styled from "styled-components";
import { convertPixelsToRem } from "../../utils";

export const LayoutContainer = styled.div`
  max-width: ${convertPixelsToRem(1120)};
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background: ${({ theme }) => theme["gray-800"]};
  border-radius: ${convertPixelsToRem(8)};
  display: flex;
  flex-direction: column;
`;
