import {Component} from '@angular/core';
import {Request} from '../../../models';
import {UserService} from '../../../services';
import {User} from '../../../models/user';
import {PermissionService} from '../../../services/permission/permission.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  requestStatus = Request.STATUS;

  tableColumns = [
    'plant',
    'name',
    'status',
    'creationDate',
    'dueDate',
    'actions'
  ];

  constructor(protected permissionService: PermissionService) {
  }
}
