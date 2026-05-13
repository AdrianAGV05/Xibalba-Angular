import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Encabezado } from '../encabezado/encabezado';
import { PiePagina } from '../pie-pagina/pie-pagina';

@Component({
  selector: 'app-menu-main',
  imports: [RouterLink, Encabezado, PiePagina],
  templateUrl: './menu-main.html',
  styleUrl: './menu-main.css',
})
export class MenuMain {
  isNotificationsActive = false;
  activeMenu: string | null = null;

  toggleNotifications() {
    this.isNotificationsActive = !this.isNotificationsActive;
    if (this.isNotificationsActive) this.activeMenu = null;
  }

  toggleMenu(menuName: string) {
    this.activeMenu = this.activeMenu === menuName ? null : menuName;
    if (this.activeMenu) this.isNotificationsActive = false;
  }

  isMenuOpen(menuName: string): boolean {
    return this.activeMenu === menuName;
  }
}
