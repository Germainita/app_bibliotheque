import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { apiUrl } from "./apiUrl";

@Injectable({
    providedIn: "root"
})

export class EmpruntService {
    private http = inject(HttpClient);

    // Methode pour recuperer toutes les emprunts 
    getAllEmprunt(){
        return this.http.get(`${apiUrl}/emprunts`);
    }
    
    // Methode ajouter une emprunt 
    addEmprunt(emprunt:any){
        return this.http.post(`${apiUrl}/emprunts`, emprunt);
    }

    // Methode ajouter une emprunt 
    updateEmprunt(id:any, emprunt:any){
        return this.http.put(`${apiUrl}/emprunts/${id}`, emprunt);
    }

    
}