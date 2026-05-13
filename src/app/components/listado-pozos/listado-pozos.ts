import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Encabezado } from '../encabezado/encabezado';
import { PiePagina } from '../pie-pagina/pie-pagina';

@Component({
  selector: 'app-listado-pozos',
  imports: [RouterLink, Encabezado, PiePagina],
  templateUrl: './listado-pozos.html',
  styleUrl: './listado-pozos.css',
})
export class ListadoPozos {

}
