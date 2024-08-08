import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../Communs/navbar/navbar.component';
import { SidebarComponent } from '../../Communs/sidebar/sidebar.component';
import { LivreService } from '../../../Services/livre.service';
import { ModelLivre } from '../../../Models/livre.model';
import { FormsModule } from '@angular/forms';
import { ModelCategorie } from '../../../Models/categorie.model';
import { CategorieService } from '../../../Services/categorie.service';
import Swal from 'sweetalert2';
import { apiUrlStockage } from '../../../Services/apiUrlStockage';

@Component({
  selector: 'app-livre',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, FormsModule],
  templateUrl: './livre.component.html',
  styleUrl: './livre.component.css'
})
export class LivreComponent implements OnInit {
  // Injection de dependances 
  private livreService = inject(LivreService);
  private categorieService = inject(CategorieService);

  // Declaration des variables 
  tabLivres: ModelLivre[] = [];
  tabCategorie:ModelCategorie[] = [];
  livreObject: ModelLivre = {};
  oldIsbn: any;
  image:string = "";
  imageLivre:string = "";
  messageImage: string = "Aucune image pour ce livre";

  // Declaration des methodes 
  ngOnInit(): void {
    this.fetchLivres();
    this.fetchCategorie();
  }

  // Recuperation de tous les livres 
  fetchLivres(){
    this.livreService.getAllLivre().subscribe(
      (response:any) =>{
        console.log(response.data);
        this.tabLivres = response.data.reverse();
      }
    )
  }

  // Recuperation de toutes les categorie
  fetchCategorie(){
    this.categorieService.getAllCategorie().subscribe(
      (response:any) => {
        if(response.categories){
          this.tabCategorie = response.categories;
          console.log(this.tabCategorie);
        }
      }
    )
  }

  // Methode pour upload image 
  uplaodImgae(event: any){
    console.log(event.target.files[0]);
    this.image = event.target.files[0];
  }

  // Methode pour ajouter un livre 
  addLivre(){
    console.log(this.livreObject);
    
    if(!this.livreObject.auteur || 
      !this.livreObject.isbn || 
      !this.livreObject.categorie_id || 
      !this.livreObject.date_publication || 
      !this.livreObject.isbn || 
      !this.livreObject.quantite || 
      !this.livreObject.titre ){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Veuillez remplir les champs",
          confirmButtonColor: "#4AA3A2",
        });
    }else{
      let formdata = new FormData();
      formdata.append("isbn", this.livreObject.isbn);
      formdata.append("titre", this.livreObject.titre);
      formdata.append("auteur", this.livreObject.auteur);
      formdata.append("categorie_id", this.livreObject.categorie_id);
      formdata.append("date_publication", this.livreObject.date_publication);
      formdata.append("quantite", this.livreObject.quantite);
      formdata.append("image", this.image);
      console.log(formdata);
      
      this.livreService.addLivre(formdata).subscribe(
        (response:any) =>{
          console.log(response);
          this.livreObject = {};
          this.image = "";
          this.fetchLivres();
          if(response.data){
            Swal.fire({
              icon: "success",
              text: "Livre ajouté avec success",
              // confirmButtonColor: "#4AA3A2",
              timer: 3
            });
          }
        }
      )
    }
  }

  // Methode pour stocker l'objet livre 
  getLivreObject(livre:any){
    this.livreObject = livre;
    this.oldIsbn = this.livreObject.isbn;
    // console.log(this.livreObject);
    this.messageImage = "Aucune image pour ce livre";
    if(this.livreObject.image){
      this.imageLivre = `${apiUrlStockage}/${this.livreObject.image}`
    }else{
      this.imageLivre = ""
    }
  }

  // Methode pour modifier un livre 
  updateLivre(){
    console.log(this.livreObject);
    
    if(!this.livreObject.auteur || 
      !this.livreObject.isbn || 
      !this.livreObject.categorie_id || 
      !this.livreObject.date_publication || 
      !this.livreObject.isbn || 
      !this.livreObject.quantite || 
      !this.livreObject.titre || !this.image ){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Veuillez remplir les champs",
          confirmButtonColor: "#4AA3A2",
        });
    }else{
      let formdata = new FormData();
      console.log(this.oldIsbn);
      
      if(this.oldIsbn != this.livreObject.isbn){
        console.log(this.oldIsbn);
        formdata.append("isbn", this.livreObject.isbn);
      }
      formdata.append("titre", this.livreObject.titre);
      formdata.append("auteur", this.livreObject.auteur);
      formdata.append("categorie_id", this.livreObject.categorie_id);
      formdata.append("date_publication", this.livreObject.date_publication);
      formdata.append("quantite", this.livreObject.quantite);
      formdata.append("image", this.image);
      console.log(formdata);
      
      this.livreService.updateLivre(this.livreObject.id, formdata).subscribe(
        (response:any) =>{
          console.log(response);
          this.livreObject = {};
          this.image = "";
          this.fetchLivres();
          if(response.data){
            Swal.fire({
              icon: "success",
              text: "Livre modifié avec success",
              timer: 3000
            });
            this.messageImage = "";
          }
        },
        (error) =>{
          console.log(error);
          
        }
      )
    }
  }

  // Recuperer le nom de la categorie du livre 
  getNameCategorie(livre:any){
    const livreFound = this.tabCategorie.find((elt:any) => elt.id == livre.categorie_id);    
    if(livreFound){
      return livreFound.nom;
    }
    return 
  }

  // Methode pour initialiser l'objet 
  initializeLivre(){
    this.livreObject = {}
  }
}

