import styled from "styled-components/native";

interface StepProps {
  selected: boolean;
}

export const Container = styled.View`
  /* background: red; */

  flex: 1;
`;

export const ContainerStepsProgress = styled.View`
  flex-direction: row;
  align-itens: center;
  justify-content: center;

  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  padding-top: 10px;
`;

export const ButtonPrev = styled.TouchableOpacity`
  /* width: 20%; */
`;

export const ButtonNext = styled.TouchableOpacity`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const TextButton = styled.Text``;

export const ContainerSteps = styled.View`
  width: calc(100% - 5px);
  height: 15px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
`;

export const Step = styled.View<StepProps>`
  width: 30px;
  height: 10px;

  /* background: orange; */
  background: ${({ selected }) => (selected ? "orange" : "#ccc")};
`;
