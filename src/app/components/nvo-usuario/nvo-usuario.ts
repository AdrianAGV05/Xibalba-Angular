import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Encabezado } from '../encabezado/encabezado';
import { PiePagina } from '../pie-pagina/pie-pagina';

@Component({
  selector: 'app-nvo-usuario',
  imports: [RouterLink, Encabezado, PiePagina],
  templateUrl: './nvo-usuario.html',
  styleUrl: './nvo-usuario.css',
})
export class NvoUsuario {

}
