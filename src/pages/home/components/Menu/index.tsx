

import { coffeeList } from '../../../../constants/coffees';

import { CoffeeCard } from '../CoffeeCard';

import {
  MenuContainer,
  CoffeeListContainer
} from './styles';

export function Menu() {
  return (
    <MenuContainer>
      <header>
        <h1>Nossos cafés</h1>
      </header>

      <CoffeeListContainer>
        {coffeeList.map((coffee) => {
          const { img, title, description, value } = coffee;

          return (
            <CoffeeCard
              key={`${title}${value}`}
              img={img}
              title={title}
              description={description}
              value={value}
            />
          );
        })}
      </CoffeeListContainer>
    </MenuContainer>
  );
}