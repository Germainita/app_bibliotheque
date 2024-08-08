import { Component, inject, OnInit } from '@angular/core';
import { UserModel } from '../../../Models/user.model';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  private router = inject(Router);
  private authService = inject(AuthService);

  // Declaration des variables 
  connexionInfos:any;
  userConnected:UserModel = {};

  ngOnInit(): void {
    if(localStorage.getItem("infos_Connexion")){
      this.connexionInfos = JSON.parse(localStorage.getItem("infos_Connexion") || "");
      console.log(this.connexionInfos);
      if(this.connexionInfos){
        this.userConnected = this.connexionInfos.user;
        console.log(this.userConnected);
      }
    }
  }
  // Deconnexion
  logout(){
    this.authService.logout().subscribe(
      (response:any) =>{
        console.log(response);
        if(response.success){
          this.router.navigateByUrl("/connexion");
          localStorage.setItem("infos_Connexion", JSON.stringify(""));
        }
        
      }
    )
  }
}
