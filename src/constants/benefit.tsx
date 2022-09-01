import { ReactNode } from "react";

import {
  ShoppingCart,
  Package,
  Timer,
  Coffee
} from "phosphor-react";

interface BenefitType {
  id: number;
  img: ReactNode;
  description: string;
}

export const benefitList: BenefitType[] = [
  {
    id: 1,
    img: <ShoppingCart size={20} />,
    description: 'Compra simples e segura'
  },
  {
    id: 2,
    img: <Package size={20} />,
    description: 'Embalagem mantém o café intacto'
  },
  {
    id: 3,
    img: <Timer size={20} />,
    description: 'Entrega rápida e rastreada'
  },
  {
    id: 4,
    img: <Coffee size={20} />,
    description: 'O café chega fresquinho até você'
  },
];
