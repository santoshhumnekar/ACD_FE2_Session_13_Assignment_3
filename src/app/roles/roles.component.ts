import { Component, OnInit } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { SuperAdminComponent } from '../super-admin/super-admin.component';
import { MemberComponent } from '../member/member.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
