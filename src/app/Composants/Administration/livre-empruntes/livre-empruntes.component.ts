import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../Communs/navbar/navbar.component';
import { SidebarComponent } from '../../Communs/sidebar/sidebar.component';
import { EmpruntService } from '../../../Services/emprunt.service';
import { apiUrlStockage } from '../../../Services/apiUrlStockage';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-livre-empruntes',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, FormsModule],
  templateUrl: './livre-empruntes.component.html',
  styleUrl: './livre-empruntes.component.css'
})
export class LivreEmpruntesComponent implements OnInit {
  private empruntService = inject(EmpruntService);

  tabEmprunts:any[] = [];
  empruntObject:any;
  imageLivre:string = "";
  dateRetour:any

  ngOnInit(): void {
    this.fetchEmprunt();
  }

  fetchEmprunt(){
    this.empruntService.getAllEmprunt().subscribe(
      (response:any) => {
        console.log(response.data);
        if(response.data){
          this.tabEmprunts = response.data;
        }
      }
    )
  }

  // Recuperer les infos de l'objet selectionné 
  getEmpruntObject(emprunt:any){
    this.empruntObject = emprunt;
    this.imageLivre = `${apiUrlStockage}/${emprunt.livre.image}`
  }

  // Mettre a jour la date de retour 
  updatemprunt(){
    console.log(this.empruntObject);
    console.log(this.dateRetour);
    this.empruntObject.date_retour_reelle = this.dateRetour;
    this.empruntService.updateEmprunt(this.empruntObject.id, this.empruntObject).subscribe(
      (response:any) =>{
        console.log(response);
        if(response.data){
          Swal.fire({
            icon: "success",
            text: "Emprunt retourné avec succes",
            showConfirmButton: false,
            timer: 3000
          });
          this.fetchEmprunt();
          this.dateRetour = "";
        }        
      }
    )  
    
  }
}
