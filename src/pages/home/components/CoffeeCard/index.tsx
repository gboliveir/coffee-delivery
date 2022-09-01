import { ShoppingCart } from "phosphor-react";

import { CoffeeCardContainer } from './styles';

interface CoffeeCardProps {
  img: string;
  title: string;
  description: string;
  value: number;
}

export function CoffeeCard({
  img,
  title,
  description,
  value,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <header>
        <img src={img} alt={title} />
      </header>

      <main>
        <h3>{title}</h3>
        <span>{description}</span>
      </main>

      <footer>
        <form>
          <div>
            <span>R$</span>
            <span>{value}</span>
          </div>
          <div>
            <button type='button'>-</button>
            <span>1</span>
            <button type='button'>+</button>
          </div>
          <button type='submit'>
            <ShoppingCart />
          </button>
        </form>
      </footer>
    </CoffeeCardContainer>
  );
}