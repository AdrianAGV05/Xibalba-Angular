import { Component } from '@angular/core';
import { PiePagina } from '../pie-pagina/pie-pagina';
import { Encabezado } from '../encabezado/encabezado';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-de-operacion',
  imports: [PiePagina, Encabezado, RouterLink],
  templateUrl: './gestion-de-operacion.html',
  styleUrl: './gestion-de-operacion.css',
})
export class GestionDeOperacion {

}
