import { Transferencia } from './../models/trasnferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 0;
  destino: number = 0;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir(): void {
    console.log('Solicitada nova trensferencia');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionar(valorEmitir).subscribe((resultado) => {
      this.limparCampos();
      this.router.navigateByUrl('extrato');

    },
    error => console.error(error))
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
