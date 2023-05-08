import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { BeneficiaryFormComponent } from './beneficiary-form/beneficiary-form.component';


const routes: VexRoutes = [
  { 
    path:'beneficiaries',
    component:BeneficiariesComponent,
    data: {
        toolbarShadowEnabled: false
    }
  },
  { 
    path:'add-beneficiary',
    component:BeneficiaryFormComponent,
    data: {
        toolbarShadowEnabled: false
    }
  },
//   { 
//     path:'request-history',
//     component:RequestHistoryComponent,
//     data: {
//         toolbarShadowEnabled: false
//     }
//   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ConfigurationsRoutingModule {
}