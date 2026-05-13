import { Component } from '@angular/core';
import { PiePagina } from '../pie-pagina/pie-pagina';
import { Encabezado } from '../encabezado/encabezado';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-de-mtto',
  imports: [PiePagina, Encabezado, RouterLink],
  templateUrl: './gestion-de-mtto.html',
  styleUrl: './gestion-de-mtto.css',
})
export class GestionDeMtto {

}
