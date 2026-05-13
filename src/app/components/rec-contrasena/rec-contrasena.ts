import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Encabezado } from '../encabezado/encabezado';
import { PiePagina } from '../pie-pagina/pie-pagina';

@Component({
  selector: 'app-rec-contrasena',
  imports: [RouterLink, Encabezado, PiePagina],
  templateUrl: './rec-contrasena.html',
  styleUrl: './rec-contrasena.css',
})
export class RecContrasena {

}
