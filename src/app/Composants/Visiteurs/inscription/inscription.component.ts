import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserModel } from '../../../Models/user.model';
import { FormsModule } from '@angular/forms';
import { AlertShowMessage } from '../../../Services/alretMessage';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  // Injections 
  private authService = inject(AuthService);

  // declaration des varibles
  userObject: UserModel = {} 
  alertMessage:String = "";

  // Declaration des methodes 
  register(){
    if(!this.userObject.nom || !this.userObject.prenom || !this.userObject.email || !this.userObject.password){
      this.alertMessage = "Veuillez remplir les champs";
      AlertShowMessage("alert-danger");
    }else{
      console.log(this.userObject);
      this.authService.register(this.userObject).subscribe(
        (response:any) =>{
          console.log(response);          
        }
      )
    }
  }
}
