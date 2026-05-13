import { Component } from '@angular/core';
import { PiePagina } from '../pie-pagina/pie-pagina';
import { Encabezado } from '../encabezado/encabezado';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado-operadores',
  imports: [PiePagina, Encabezado, RouterLink],
  templateUrl: './listado-operadores.html',
  styleUrl: './listado-operadores.css',
})
export class ListadoOperadores {

}
