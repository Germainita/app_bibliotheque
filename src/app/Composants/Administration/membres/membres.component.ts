import { Component, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../Communs/navbar/navbar.component';
import { SidebarComponent } from '../../Communs/sidebar/sidebar.component';
import { UserModel } from '../../../Models/user.model';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-membres',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './membres.component.html',
  styleUrl: './membres.component.css'
})
export class MembresComponent implements OnInit{
  private userService = inject(UserService);
  tabMembres:UserModel[] = [];

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser(){
    this.userService.getAllUser().subscribe(
      (response)=>{
        console.log(response);
        
      }
    )
  }
}
