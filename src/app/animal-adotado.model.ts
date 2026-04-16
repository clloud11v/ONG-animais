import { Animal } from './animal.model';

export interface AnimalAdotado extends Animal {
  adotadoEm: string;
  adotantePor: string;
  avaliacao: number;
  depoimento: string;
}
