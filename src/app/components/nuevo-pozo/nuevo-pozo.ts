import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Encabezado } from '../encabezado/encabezado';
import { PiePagina } from '../pie-pagina/pie-pagina';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-pozo',
  imports: [RouterLink, Encabezado, PiePagina, FormsModule],
  templateUrl: './nuevo-pozo.html',
  styleUrl: './nuevo-pozo.css',
})
export class NuevoPozo {
  profPerforacion: number = 30;
  diamPerforacion: number = 10;
  diamAdeme: number = 10;
}
