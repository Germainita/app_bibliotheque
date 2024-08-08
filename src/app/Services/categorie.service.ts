import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { apiUrl } from "./apiUrl";

@Injectable({
    providedIn: "root"
})

export class CategorieService {
    private http = inject(HttpClient);

    // Methode pour recuperer toutes les categories 
    getAllCategorie(){
        return this.http.get(`${apiUrl}/categories`);
    }
    
    // Methode ajouter une categorie 
    addCategorie(categorie:any){
        return this.http.post(`${apiUrl}/categories`, categorie);
    }

    // Methode pour mettre a jour une categorie 
    updateCategorie(id:any, categorie:any){
        return this.http.put(`${apiUrl}/categories/${id}`, categorie);
    }
}