import logoImg from '../../assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';

import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />

      <div>
        <span>
          <MapPin size={20} />
          Porto Alegre, RS
        </span>
        <span>
          <ShoppingCart size={20} />
        </span>
      </div>
    </HeaderContainer>
  );
}