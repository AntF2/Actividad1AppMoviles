import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { GestionlibroComponent } from './pages/gestionlibro/gestionlibro.component';
import { GestionusuarioComponent } from './pages/gestionusuario/gestionusuario.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { LoginComponent } from './pages/login/login.component';
import { gestionlibroGuard } from './guard/gestionlibro.guard';
import { gestionusuarioGuard } from './guard/gestionusuario.guard';
import { loginGuard } from './guard/login.guard';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'prestamos', component: PrestamosComponent},
    {path: 'catalogo', component: CatalogoComponent},
    {path: 'gestionlibro', component: GestionlibroComponent, canActivate: [loginGuard]},
    {path: 'gestionusuario', component: GestionusuarioComponent, canActivate: [loginGuard]},
    {path: 'contactos', component: ContactosComponent},
    {path: 'login', component: LoginComponent, canActivate: [gestionlibroGuard, gestionusuarioGuard]},
    {path: 'registro', component: RegistroComponent},
];
