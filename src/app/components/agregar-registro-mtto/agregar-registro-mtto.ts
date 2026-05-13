import { Component } from '@angular/core';
import { PiePagina } from '../pie-pagina/pie-pagina';
import { Encabezado } from '../encabezado/encabezado';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-registro-mtto',
  imports: [PiePagina, Encabezado, RouterLink, FormsModule],
  templateUrl: './agregar-registro-mtto.html',
  styleUrl: './agregar-registro-mtto.css',
})
export class AgregarRegistroMtto {
  hpMotor: number = 0;
  kwMotor: number = 0;
  eficienciaMotor: number = 0;
  capacidadTablero: number = 0;
  capacidadTransformador: number = 0;
  longitudCable: number = 0;
  diametroTuberia: number = 0;
  longitudTuberia: number = 0;
}
