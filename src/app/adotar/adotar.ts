import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { AnimaisService } from '../animais.service';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-adotar',
  imports: [],
  templateUrl: './adotar.html',
  styleUrl: './adotar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Adotar {
  private animaisService = inject(AnimaisService);
  filter = signal<'todos' | 'cao' | 'gato' | 'adotados'>('todos');

  filteredAnimals = computed(() => {
    const todosAnimais = this.animaisService.animais();
    const currentFilter = this.filter();
    if (currentFilter === 'todos') {
      return todosAnimais;
    }
    if (currentFilter === 'adotados') {
      return [];
    }
    return todosAnimais.filter(animal => animal.tipo === currentFilter);
  });

  animaisAdotados = this.animaisService.animaisAdotados;

  setFilter(type: 'todos' | 'cao' | 'gato' | 'adotados') {
    this.filter.set(type);
  }

  getStars(avaliacao: number): string[] {
    const stars: string[] = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < avaliacao ? '★' : '☆');
    }
    return stars;
  }
}
