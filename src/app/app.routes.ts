import { Routes } from '@angular/router';
import { PaginaInicio } from './components/pagina-inicio/pagina-inicio';
import { InicioSesion } from './components/inicio-sesion/inicio-sesion';
import { MenuMain } from './components/menu-main/menu-main';

export const routes: Routes = [
    { path: '', component: PaginaInicio },
    { path: 'inicio-sesion', component: InicioSesion },
    { path: 'menu-main', component: MenuMain },
];
