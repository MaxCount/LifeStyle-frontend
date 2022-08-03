import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";
import { userModel} from "../user-model";

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {

  models !: userModel[] ;

  constructor(public adminService: AdminService) {
  this.models = []
  }

  public getUsers(): void {
    this.adminService.listOfUsers().subscribe(data => {
      this.models = data;
    })
  }

  ngOnInit() {
    this.getUsers()
  }

  public DeleteUser(userId: number): void {
    this.adminService.deleteUser(userId)
      .subscribe({
        next: (responce:void) =>{
          console.log(responce)
          this.getUsers()
        },
        error: (HttpErrorResponse)=>{
          alert((HttpErrorResponse))
        }
    })
  }

  public setAdminRole(username: string): void {
    this.adminService.setAdmin(username)
      .subscribe({
        next: (responce: void) => {
          console.log(responce);
          this.getUsers();
        },
        error: (HttpErrorResponse) => {
          alert(HttpErrorResponse);
        }
      });
  }
}
