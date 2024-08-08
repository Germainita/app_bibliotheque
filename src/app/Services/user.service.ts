import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { apiUrl } from "./apiUrl";

@Injectable({
    providedIn: "root"
})

export class UserService {
    private http = inject(HttpClient);

    // Methode pour recuperer toutes les users 
    getAllUser(){
        return this.http.get(`${apiUrl}/user`);
    }
    
    // Methode pour ajouter un user 
    // addUser(user:any){
    //     return this.http.post(`${apiUrl}/users`, user);
    // }

    // // Methode pour mettre a jour un user 
    // updateUser(id:any, user:any){
    //     return this.http.post(`${apiUrl}/users/${id}`, user);
    // }
    
    // // Methode pour archiver un user 
    // archiveUser(id:any){
    //     return this.http.delete(`${apiUrl}/users/${id}`);
    // }
    
    // // Methode pour restaurer un user 
    // restaureuser(id:any){
    //     return this.http.post(`${apiUrl}/users/${id}/restore`, "");
    // }
    
    // // Methode pour supprimer definitivement un user 
    // deleteUser(id:any){
    //     return this.http.delete(`${apiUrl}/users/${id}/force-delete`);
    // }


}