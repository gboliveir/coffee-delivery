import { InputNumberContainer } from "./styles";

export function InputNumber() {
  return (
    <InputNumberContainer>
      <button type='button'>-</button>
      <span>1</span>
      <button type='button'>+</button>
    </InputNumberContainer>
  );
}