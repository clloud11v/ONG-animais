export interface Animal {
  id: number;
  nome: string;
  raca: string;
  idade: number;
  descricao: string;
  imagemUrl: string;
  tipo: 'cao' | 'gato';
}