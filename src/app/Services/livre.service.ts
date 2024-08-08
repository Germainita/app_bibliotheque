import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { apiUrl } from "./apiUrl";

@Injectable({
    providedIn: "root"
})

export class LivreService {
    private http = inject(HttpClient);

    // Methode pour recuperer toutes les livres 
    getAllLivre(){
        return this.http.get(`${apiUrl}/livres`);
    }
    
    // Methode pour ajouter un livre 
    addLivre(livre:any){
        return this.http.post(`${apiUrl}/livres`, livre);
    }

    // Methode pour mettre a jour un livre 
    updateLivre(id:any, livre:any){
        return this.http.post(`${apiUrl}/livres/${id}`, livre);
    }
    
    // Methode pour archiver un livre 
    archiveLivre(id:any){
        return this.http.delete(`${apiUrl}/livres/${id}`);
    }
    
    // Methode pour restaurer un livre 
    restaureLivre(id:any){
        return this.http.post(`${apiUrl}/livres/${id}/restore`, "");
    }
    
    // Methode pour supprimer definitivement un livre 
    deleteLivre(id:any){
        return this.http.delete(`${apiUrl}/livres/${id}/force-delete`);
    }


}