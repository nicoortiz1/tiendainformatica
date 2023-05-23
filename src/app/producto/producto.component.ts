import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductosComponent {
  productos = [
    { nombre: 'PC', precio: 300000, descuento: '20%', imagen: 'assets/images/pc.jpg' },
    { nombre: 'Teclado', precio: 1000, descuento: '10%', imagen: 'assets/images/teclado.jpg' },
    { nombre: 'Monitor', precio: 150000, descuento: '5%', imagen: 'assets/images/monitor.jpg' },
    { nombre: 'Mouse', precio: 3500 , descuento: '15%', imagen: 'assets/images/mouse.jpg' },
    { nombre: 'Impresora', precio: 50000, descuento: '25%', imagen: 'assets/images/impresora.jpg' },
    { nombre: 'Procesador', precio: 100000, descuento: '', imagen: 'assets/images/procesador.jpg' },
    { nombre: 'Auriculares', precio: 50000, descuento: '25%', imagen: 'assets/images/auriculares.jpg' },
    { nombre: 'Memoria RAM', precio: 100000, descuento: '5%', imagen: 'assets/images/ram.jpg' }
  ];
 
  descuentoBusqueda: string =''; // Variable para almacenar el valor de búsqueda
  
  buscarPorDescuento(descuento: string) {
    if (descuento) {
      this.productos = this.productos.filter(producto =>
        parseInt(producto.descuento) >= parseInt(descuento)
      );
    } else {
      // Si el filtro está vacío, mostrar todos los productos
      this.productos = [
        { nombre: 'PC', precio: 300000, descuento: '20%', imagen: 'assets/images/pc.jpg' },
        { nombre: 'Teclado', precio: 1000, descuento: '10%', imagen: 'assets/images/teclado.jpg' },
        { nombre: 'Monitor', precio: 150000, descuento: '5%', imagen: 'assets/images/monitor.jpg' },
        { nombre: 'Mouse', precio: 3500 , descuento: '15%', imagen: 'assets/images/mouse.jpg' },
        { nombre: 'Impresora', precio: 50000, descuento: '25%', imagen: 'assets/images/impresora.jpg' },
        { nombre: 'Procesador', precio: 100000, descuento: '', imagen: 'assets/images/procesador.jpg' },
        { nombre: 'Auriculares', precio: 50000, descuento: '25%', imagen: 'assets/images/auriculares.jpg' },
        { nombre: 'Memoria RAM', precio: 100000, descuento: '5%', imagen: 'assets/images/ram.jpg' }
      ];
    }
  }
  
  
  
}
