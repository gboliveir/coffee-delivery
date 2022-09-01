import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';

import bigCoffeeImg from '../../../../assets/big-coffee.svg';
import backgroundImg from '../../../../assets/background.svg';

import { benefitList } from '../../../../constants/benefit';

import { Benefit } from '../Benefit';

import {
  BenefitsContainer,
  FlashyMessageContainer,
  PresentationCardContainer,
} from "./styles";

export function PresentationCard() {
  return (
    <PresentationCardContainer
      style={{
        backgroundImage: `url(${backgroundImg})`
      }}
    >
      <div>
        <FlashyMessageContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
        </FlashyMessageContainer>
      
        <BenefitsContainer>
          {benefitList.map((benefit) => {
            const { id, img, description } = benefit;

            return (
              <Benefit 
                key={id}
                img={img}
                description={description}
              />
            );
          })}
        </BenefitsContainer> 
      </div>
      
      <div> 
        <img
          src={bigCoffeeImg}
          alt="Imagem de um grande copo de café de cor banca com preto e vários complementos vitaminicos em volta."
        />
      </div>
    </PresentationCardContainer>
  );
}
