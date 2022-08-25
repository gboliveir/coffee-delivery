import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';
import bigCoffeeImg from '../../assets/big-coffee.svg';
import backgroundImg from '../../assets/background.svg';

import { Benefits, BenefitsContainer, FlashyMessageContainer, FlashyTitle, InformationalSpace, PresentationCardContainer, SubTitle } from './styles';

export function Home() {
  return (
    <PresentationCardContainer style={{
      backgroundImage: `url(${backgroundImg})`
    }}>
      <InformationalSpace>
        <FlashyMessageContainer>
          <FlashyTitle>Encontre o café perfeito para qualquer hora do dia</FlashyTitle>
          <SubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitle>
        </FlashyMessageContainer>
      
        <BenefitsContainer>
          <Benefits>
            <span><ShoppingCart size={20} /></span>  
            <span>Compra simples e segura</span>
          </Benefits>
          <Benefits>
            <span><Package size={20} /></span>
            <span>Embalagem mantém o café intacto</span>
          </Benefits>
          <Benefits>
            <span><Timer size={20} /></span>
            <span>Entrega rápida e rastreada</span>
          </Benefits>
          <Benefits>
            <span><Coffee size={20} /></span>
            <span>O café chega fresquinho até você</span>
          </Benefits>
        </BenefitsContainer> 
      </InformationalSpace>
      
      <div> 
        <img
          src={bigCoffeeImg}
          alt="Imagem de um grande copo de café de cor banca com preto e vários complementos vitaminicos em volta."
        />
      </div>
    </PresentationCardContainer>
  );
}