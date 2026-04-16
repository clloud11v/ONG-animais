import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Depoimentos } from '../depoimentos/depoimentos';

@Component({
  selector: 'app-inicio',
  imports: [Depoimentos],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Inicio {

}
