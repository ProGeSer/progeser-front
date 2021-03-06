import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {
  HomeComponent,
  ManageRequestComponent,
  ManagePlantComponent,
  ManageRequestDistributionComponent,
  LoginComponent,
  GreenhousesListComponent,
  PlantsListComponent,
  InviteUserComponent,
  ManageAccountComponent,
  GreenhouseCalendarComponent,
  ManageGreenhouseComponent,
  AccountsListComponent,
  ManageAccountRightsComponent,
  ManageAccountRequestComponent,
  ManagePotComponent,
  PotsListComponent,
  CreateAccountComponent,
  ResetPasswordComponent
} from './controllers';
import {RouteGuardService, UserService} from './services';
import {User} from './models/user';

const routes: Routes = [
  /* Common routes */
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RouteGuardService],
    data: {
      breadcrumb: false
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      breadcrumb: false
    }
  },
  {
    path: 'create-account/:token',
    component: CreateAccountComponent,
    data: {
      breadcrumb: 'finalizeMyAccount',
      type: UserService.CREATION_TYPES[0]
    }
  },
  {
    path: 'validate-account/:token',
    component: CreateAccountComponent,
    data: {
      breadcrumb: 'finalizeMyAccount',
      type: UserService.CREATION_TYPES[1]
    }
  },
  {
    path: 'reset-password/:token',
    component: ResetPasswordComponent,
    data: {
      breadcrumb: 'resetMyPassword'
    }
  },
  {
    path: 'manage-account',
    component: ManageAccountComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: User.roles,
      breadcrumb: 'manageMyAccount'
    }
  },
  {
    path: 'manage-request',
    component: ManageRequestComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: User.roles,
      breadcrumb: 'manageRequest',
      visualization: false
    }
  },
  {
    path: 'manage-request/:id',
    component: ManageRequestComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: User.roles,
      breadcrumb: 'manageRequest',
      visualization: false
    }
  },
  {
    path: 'manage-request/:id/see',
    component: ManageRequestComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'manageRequest',
      visualization: true
    }
  },
  /* Grower routes */
  {
    path: 'grower/manage-request-distribution',
    component: ManageRequestDistributionComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'distributeRequestPlants'
    }
  },
  {
    path: 'grower/greenhouses-list',
    component: GreenhousesListComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'greenhousesList'
    }
  },
  {
    path: 'grower/manage-greenhouse',
    component: ManageGreenhouseComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'manageGreenhouse'
    }
  },
  {
    path: 'grower/manage-greenhouse/:id',
    component: ManageGreenhouseComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'manageGreenhouse'
    }
  },
  {
    path: 'grower/plants-list',
    component: PlantsListComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'plantsList'
    }
  },
  {
    path: 'grower/manage-plant',
    component: ManagePlantComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'managePlant'
    }
  },
  {
    path: 'grower/manage-plant/:id',
    component: ManagePlantComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'managePlant'
    }
  },
  {
    path: 'grower/pots-list',
    component: PotsListComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'potsList'
    }
  },
  {
    path: 'grower/manage-pot',
    component: ManagePotComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'managePot'
    }
  },
  {
    path: 'grower/manage-pot/:id',
    component: ManagePotComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'managePot'
    }
  },
  {
    path: 'grower/invite-user',
    component: InviteUserComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'sendApplicationInvitation'
    }
  },
  {
    path: 'grower/accounts-list',
    component: AccountsListComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'usersList'
    }
  },
  {
    path: 'grower/manage-account-rights',
    component: ManageAccountRightsComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'manageAccountRights'
    }
  },
  {
    path: 'grower/manage-account-request/:id',
    component: ManageAccountRequestComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'manageAccountRequest'
    }
  },
  {
    path: 'grower/greenhouse-calendar',
    component: GreenhouseCalendarComponent,
    canActivate: [RouteGuardService],
    data: {
      roles: [User.roles[1]],
      breadcrumb: 'greenhouseCalendar'
    }
  },
  /* Default route */
  {
    path: '**',
    canActivate: [RouteGuardService],
    component: HomeComponent,
    data: {
      breadcrumb: null
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
