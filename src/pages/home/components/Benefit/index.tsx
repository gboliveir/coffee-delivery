import { ReactNode } from "react";

import { BenefitContainer } from "./styles";

interface BenefitProps {
  img: ReactNode;
  description: string;
}

export function Benefit({
  img,
  description
}: BenefitProps) {
  return (
    <BenefitContainer>
      <span>{img}</span>  
      <span>{description}</span>
    </BenefitContainer>
  );
}