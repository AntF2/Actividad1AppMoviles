import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestionlibro',
  standalone: true,
  imports: [],
  templateUrl: './gestionlibro.component.html',
  styleUrl: './gestionlibro.component.css'
})
export class GestionlibroComponent {
  constructor (private router: Router) {}
    logout(){
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  
}
