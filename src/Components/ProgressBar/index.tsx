import {
  Container,
  ButtonPrev,
  ButtonNext,
  TextButton,
  ContainerSteps,
  ContainerStepsProgress,
  Step
} from "./styles";

export function ProgressBar() {
  const status = "meta-peso";

  const steps = [
    { status: "meta" },
    { status: "genero" },
    { status: "data-nascimento" },
    { status: "altura" },
    { status: "peso" },
    { status: "meta-peso" },
    { status: "meta-peso-semana" },
    { status: "plano-progresso" },
    { status: "ultimo-passo" },
    { status: "done" }
  ];

  const getStepPosition = (transferStatus) => {
    return steps.findIndex(({ status }) => status === transferStatus);
  };

  return (
    <Container>
      <ContainerStepsProgress>
        <ButtonPrev>
          <TextButton> {"<"} </TextButton>
        </ButtonPrev>

        <ContainerSteps>
          {steps.map((value, index) => (
            <Step
              selected={getStepPosition(status) === index ? true : false}
              key={index}
            ></Step>
          ))}
        </ContainerSteps>
      </ContainerStepsProgress>
      <ButtonNext>
        <TextButton> Avançar </TextButton>
      </ButtonNext>
    </Container>
  );
}
