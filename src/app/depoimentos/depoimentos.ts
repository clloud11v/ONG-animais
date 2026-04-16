import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-depoimentos',
  imports: [],
  templateUrl: './depoimentos.html',
  styleUrl: './depoimentos.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Depoimentos {
  private animaisService = inject(AnimaisService);
  feedbacks = this.animaisService.feedbacks;

  getStars(avaliacao: number): string[] {
    const stars: string[] = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < avaliacao ? '★' : '☆');
    }
    return stars;
  }
}
