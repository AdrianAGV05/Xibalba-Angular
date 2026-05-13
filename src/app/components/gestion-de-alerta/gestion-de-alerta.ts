import { Component } from '@angular/core';
import { PiePagina } from '../pie-pagina/pie-pagina';
import { Encabezado } from '../encabezado/encabezado';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-de-alerta',
  imports: [PiePagina, Encabezado, RouterLink],
  templateUrl: './gestion-de-alerta.html',
  styleUrl: './gestion-de-alerta.css',
})
export class GestionDeAlerta {

}
