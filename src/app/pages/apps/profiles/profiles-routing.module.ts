import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { AioTableComponent } from '../aio-table/aio-table.component';
import { GeneralInfoComponent } from './organization-profile/general-info/general-info.component';
import { UserManagementComponent } from '../user-managment/user-managment.component';


const routes: VexRoutes = [
  { 
    path:'customer-profile',
    component:OrganizationProfileComponent,
    data: {
        toolbarShadowEnabled: false
    },
    children:[
        {
            path:'info',
            component:AioTableComponent,
            data: {
                toolbarShadowEnabled: false
            },
        }
    ]
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