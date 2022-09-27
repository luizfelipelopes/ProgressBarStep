import styled from "styled-components/native";

interface StepProps {
  selected: boolean;
  items: number;
}

interface TextButtonProps {
  type: string;
}

export const Container = styled.View`
  flex: 1;
`;

export const ContainerStepsProgress = styled.View`
  flex-direction: row;
  align-itens: center;
  justify-content: center;

  width: 100%;
  margin: auto;

  padding: 20px;
`;

export const ButtonPrev = styled.TouchableOpacity``;

export const ButtonNext = styled.TouchableOpacity`
  width: calc(100% - 130px);

  align-items: center;
  justify-content: center;

  bottom: 10px;
  margin: auto;
  margin-top: 40px;

  font-size: 16px;

  background-color: #40cd8b;

  padding: 15px 70px;

  border-radius: 50px;
`;

export const TextButton = styled.Text<TextButtonProps>`
  color: ${({ type }) => (type === "next" ? "#fff" : "#000")};

  font-size: 16px;
`;

export const ContainerSteps = styled.View`
  width: calc(100% - 5px);
  height: 15px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
`;

export const Step = styled.View<StepProps>`
  width: calc(${({ items }) => 100 / items}% - 5px);
  height: 10px;

  background: ${({ selected }) => (selected ? "orange" : "#ccc")};
`;

export const Content = styled.View`
  background: #f1f1f1;
  width: 100%;
  height: 100vh;
  max-height: calc(100vh - 200px);

  align-items: center;
  justify-content: center;

  max-width: 300px;
  margin: auto;

  text-align: center;
`;
