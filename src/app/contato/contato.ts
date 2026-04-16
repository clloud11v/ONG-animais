import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contato {
  formularioContato: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioContato = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      assunto: ['adocao'],
      mensagem: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formularioContato.valid) {
      console.log('Dados do formulário:', this.formularioContato.value);
      alert('Mensagem enviada com sucesso!');
      this.formularioContato.reset();
    }
  }
}
