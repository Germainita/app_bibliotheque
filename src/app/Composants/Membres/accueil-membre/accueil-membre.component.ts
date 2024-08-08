import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../Communs/navbar/navbar.component';
import { ModelLivre } from '../../../Models/livre.model';
import { LivreService } from '../../../Services/livre.service';
import { apiUrlStockage } from '../../../Services/apiUrlStockage';

@Component({
  selector: 'app-accueil-membre',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './accueil-membre.component.html',
  styleUrl: './accueil-membre.component.css'
})
export class AccueilMembreComponent implements OnInit{
  private livreService = inject(LivreService);
  urlStockage:any = apiUrlStockage;

  tabLivre:ModelLivre[] = [];
  ngOnInit(): void {
    this.livreService.getAllLivre().subscribe(
      (response:any) =>{
        console.log(response);
        if(response.data){
          this.tabLivre = response.data;
        }
        
      }
    )
  }
}
