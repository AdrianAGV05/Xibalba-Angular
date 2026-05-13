import { Component } from '@angular/core';
import { PiePagina } from '../pie-pagina/pie-pagina';
import { Encabezado } from '../encabezado/encabezado';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indicadores-indv',
  imports: [PiePagina, Encabezado],
  templateUrl: './indicadores-indv.html',
  styleUrl: './indicadores-indv.css',
})
export class IndicadoresIndv {

}
