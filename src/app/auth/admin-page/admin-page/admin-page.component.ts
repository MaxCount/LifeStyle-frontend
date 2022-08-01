import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";
import {userModel} from "../user-model";
import {PostModel} from "../../../shared/post-model";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  ngOnInit(): void {
  }

}
