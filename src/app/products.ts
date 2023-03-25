export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Cappucino',
    price: 170,
    description:
      'It is an espresso-based coffee drink that is prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes and flavoring with cinnamon or chocolate powder.',
    imageUrl: '/assets/coffee1.jpg',
  },
  {
    id: 2,
    name: 'Coffee Americano',
    price: 150,
    description:
      'It is a coffee drink prepared with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee. The strength of it varies with the number of shots of espresso and the amount of water added.',
    imageUrl: '/assets/coffee2.jpg',
  },
  {
    id: 3,
    name: 'Mochaccinno',
    price: 200,
    description:
      'It is a chocolate-flavoured warm beverage that is a variant of a caffè latte, commonly served in a glass rather than a mug.',
    imageUrl: '/assets/coffee3.jpg',
  },
  {
    id: 4,
    name: 'Café Bombon',
    price: 250,
    description:
      'It is a coffee with a topping of espresso on roughly equal amounts of condensed milk.  don’t mix, and barista usually serves this drink in a tumbler glass to manifest the beautiful layering of coffee and milk.',
    imageUrl: '/assets/coffee4.jpg',
  },
];
