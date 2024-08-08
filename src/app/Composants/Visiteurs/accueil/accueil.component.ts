import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../Communs/navbar/navbar.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
