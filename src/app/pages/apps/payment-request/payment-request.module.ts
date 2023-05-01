import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { PaymentRequestRoutingModule } from './payment-request-routing.module';
import { SingleRequestComponent } from './single-request/single-request.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BatchRequestComponent } from './batch-request/batch-request.component';
import {MatStepperModule} from '@angular/material/stepper';
import { NgxFileDropModule } from 'ngx-file-drop';
import { RequestHistoryComponent } from './request-history/request-history.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AioTableRoutingModule } from '../aio-table/aio-table-routing.module';
import { CustomerCreateUpdateModule } from '../aio-table/customer-create-update/customer-create-update.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [SingleRequestComponent,BatchRequestComponent,RequestHistoryComponent],
  imports: [
    CommonModule,
    PaymentRequestRoutingModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    PageLayoutModule,
    MatSelectModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCheckboxModule,
    MatStepperModule,
    NgxFileDropModule,
    FormsModule,
    MatRadioModule,
    MatSlideToggleModule,
    SecondaryToolbarModule,
    MatPaginatorModule,
    MatMenuModule,
    BreadcrumbsModule,
    MatDatepickerModule,
    AioTableRoutingModule,
    CustomerCreateUpdateModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
    MatButtonToggleModule
  ]
})
export class PaymentRequestModule {
}