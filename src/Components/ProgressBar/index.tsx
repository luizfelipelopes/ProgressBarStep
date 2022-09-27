import { useState } from "react";

import {
  Container,
  ButtonPrev,
  ButtonNext,
  TextButton,
  ContainerSteps,
  ContainerStepsProgress,
  Step,
  Content
} from "./styles";

interface statusProps {
  status: string;
}

interface ProgressBarProps {
  steps: array<statusProps>;
  setStatus: (status: string) => void;
  children: ReactNode;
}

export function ProgressBar({ steps, setStatus, children }: ProgressBarProps) {
  const [step, setStep] = useState(0);

  const status = steps[step]?.status;

  if (status) {
    setStatus(status);
  }

  return (
    <Container>
      <ContainerStepsProgress>
        <ButtonPrev onPress={() => setStep(step > 0 ? step - 1 : 0)}>
          <TextButton type="prev"> {"<"} </TextButton>
        </ButtonPrev>

        <ContainerSteps>
          {steps.map((value, index) => (
            <Step
              items={steps.length}
              selected={step === index ? true : false}
              key={index}
            ></Step>
          ))}
        </ContainerSteps>
      </ContainerStepsProgress>

      <Content>{children}</Content>

      <ButtonNext
        onPress={() => setStep(step < steps.length - 1 ? step + 1 : step)}
      >
        <TextButton type="next"> Avançar </TextButton>
      </ButtonNext>
    </Container>
  );
}
