import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { PaymentRequestRoutingModule } from './payment-request-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BatchRequestComponent } from './payment-request/payment-request.component';
import {MatStepperModule} from '@angular/material/stepper';
import { NgxFileDropModule } from 'ngx-file-drop';
import { RequestHistoryComponent } from './request-history/request-history.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomerCreateUpdateModule } from '../aio-table/customer-create-update/customer-create-update.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowsePaymentComponent } from './payment-request/browse-payments/browse-payments.component';
import { LottiePlayer } from '@lottiefiles/lottie-player';
import { ManualPaymentComponent } from './payment-request/manual-payment/manual-payment.component';
import { TransactionFormComponent } from './payment-request/transaction-form/transaction-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [BatchRequestComponent,RequestHistoryComponent,BrowsePaymentComponent,ManualPaymentComponent,TransactionFormComponent],
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
    MatStepperModule,
    NgxFileDropModule,
    FormsModule,
    MatPaginatorModule,
    MatMenuModule,
    BreadcrumbsModule,
    MatDatepickerModule,
    CustomerCreateUpdateModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatAutocompleteModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PaymentRequestModule {
  private ref = LottiePlayer;
}