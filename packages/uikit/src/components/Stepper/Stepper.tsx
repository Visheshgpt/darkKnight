import React from "react";
import styled from "styled-components";
import { ThemedProps } from "./types";

const StepperWrapper = styled.div<ThemedProps>`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const Stepper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const numberOfSteps = React.Children.count(children);
  return (
    <StepperWrapper>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          type PropsObject = {
            numberOfSteps: number;
          };

          return React.cloneElement(child, { numberOfSteps } as PropsObject);
        }
        return child;
      })}
    </StepperWrapper>
  );
};

export default Stepper;
