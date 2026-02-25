export interface FruitConfig {
  name: string;
  emoji: string;
  color: string;
}

export interface Fruit extends FruitConfig {
  id: string;
  price: number;
}
