import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { SingleRequestComponent } from './single-request/single-request.component';
import { BatchRequestComponent } from './batch-request/batch-request.component';
import { RequestHistoryComponent } from './request-history/request-history.component';


const routes: VexRoutes = [
  { 
    path:'single-request',
    component:SingleRequestComponent,
    data: {
        toolbarShadowEnabled: false
    }
  },{ 
    path:'batch-request',
    component:BatchRequestComponent,
    data: {
        toolbarShadowEnabled: false
    }
  },{ 
    path:'request-history',
    component:RequestHistoryComponent,
    data: {
        toolbarShadowEnabled: false
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class PaymentRequestRoutingModule {
}