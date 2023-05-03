import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { GeneralInfoComponent } from './organization-profile/general-info/general-info.component';
import { UserManagementComponent } from '../user-managment/user-managment.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerFormComponent } from './customer-profile/customer-form/customer-form.component';


const routes: VexRoutes = [
  { 
    path:'customer-profile',
    component:CustomerProfileComponent,
    data: {
        toolbarShadowEnabled: false
    },
  },
  {
    path:'profile-update',
    component:CustomerFormComponent,
    data: {
        toolbarShadowEnabled: false
    },
  },
  { 
    path:'organization-profile',
    component:OrganizationProfileComponent,
    data: {
        toolbarShadowEnabled: false
    },
    children:[
        {
            path:'info',
            component:GeneralInfoComponent,
            data: {
                toolbarShadowEnabled: false
            },
        },
        {
            path:'users',
            component:UserManagementComponent,
            data: {
                toolbarShadowEnabled: false
            },
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ProfilesRoutingModule {
}