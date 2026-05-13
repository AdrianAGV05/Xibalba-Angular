import { Component } from '@angular/core';
import { PiePagina } from '../pie-pagina/pie-pagina';
import { Encabezado } from '../encabezado/encabezado';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nuevo-operador',
  imports: [PiePagina, Encabezado, RouterLink],
  templateUrl: './nuevo-operador.html',
  styleUrl: './nuevo-operador.css',
})
export class NuevoOperador {

}
