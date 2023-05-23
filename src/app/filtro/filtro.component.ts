import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {
  @Output() filtrar = new EventEmitter<string>();
  descuentoBusqueda: string = '';

  buscarPorDescuento() {
    this.filtrar.emit(this.descuentoBusqueda);
  }
}
