import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const AuthMembreGuard = () =>{
    const router = inject(Router);
    let token;
    let user;
    const infos_connexion = JSON.parse(localStorage.getItem('infos_Connexion') || "");
    if(infos_connexion){
        token = infos_connexion.access_token
        user = infos_connexion.user
    }

    if(!token || user.role != "membre"){
        router.navigateByUrl("/connexion");
        return false;
    }

    return true;

}