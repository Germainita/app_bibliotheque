import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../Communs/navbar/navbar.component';
import { SidebarComponent } from '../../Communs/sidebar/sidebar.component';
import { CategorieService } from '../../../Services/categorie.service';
import { ModelCategorie } from '../../../Models/categorie.model';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, FormsModule],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent implements OnInit{
  // Injection de dependance 
  private categorieService = inject(CategorieService);

  // Declaration des variables 
  tabCategorie:ModelCategorie[] = [];
  categorieObject:ModelCategorie = {}

  ngOnInit(): void {
    console.log("La liste des categorie");
    
    this.fetchCategorie();
  }

  // Recuperation de toutes les categorie
  fetchCategorie(){
    this.categorieService.getAllCategorie().subscribe(
      (response:any) => {
        if(response.categories){
          this.tabCategorie = response.categories.reverse();
          console.log(this.tabCategorie);
        }
      }
    )
  }

  // Ajouter une categorie 
  addCategorie(){
    if(!this.categorieObject.nom){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Le nom de la categorie est obligatoire",
        confirmButtonColor: "#4AA3A2",
      });
    }
    this.categorieService.addCategorie(this.categorieObject).subscribe(
      (response:any) =>{
        console.log(response);
        if(response.categorie){
          Swal.fire({
            icon: "success",
            text: "Cetegorie enregistrée avec success",
            showConfirmButton: false,
            timer: 3000
          });
          this.fetchCategorie();
          this.categorieObject = {};
        }
      }
    )
  }

  // Recuperer la categorie selectionner 
  getCategorieObjet(categorie:any){
    this.categorieObject = categorie;
  }

  // Modifier une categorie 
  updateCategorie(){
    if(!this.categorieObject.nom){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Le nom de la categorie est obligatoire",
        confirmButtonColor: "#4AA3A2",
      });
    }
    this.categorieService.updateCategorie(this.categorieObject.id, this.categorieObject).subscribe(
      (response:any) =>{
        console.log(response);
        if(response.categorie){
          Swal.fire({
            icon: "success",
            text: "Cetegorie modifiée avec success",
            showConfirmButton: false,
            timer: 3000
          });
          this.fetchCategorie();
          this.categorieObject = {};
        }
      }
    )
  }
}
