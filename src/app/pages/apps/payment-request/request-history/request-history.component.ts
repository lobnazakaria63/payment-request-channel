import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, UntypedFormControl, Validators } from "@angular/forms";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from "@angular/material/form-field";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { stagger40ms } from "src/@vex/animations/stagger.animation";
import { Customer } from "../../aio-table/interfaces/customer.model";
import { CustomerCreateUpdateComponent } from "../../aio-table/customer-create-update/customer-create-update.component";
import { untilDestroyed } from "@ngneat/until-destroy";
import { Observable, ReplaySubject, filter, of } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { aioTableData, aioTableLabels } from "src/static-data/aio-table-data";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { SelectionModel } from "@angular/cdk/collections";
import { MatDialog } from "@angular/material/dialog";
import { TableColumn } from "src/@vex/interfaces/table-column.interface";
import { MatSelectChange } from "@angular/material/select";

@Component({
    templateUrl:'./request-history.component.html',
    styleUrls:['./request-history.component.scss'],animations: [
        fadeInUp400ms,
        stagger40ms
      ],
      providers: [
        {
          provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: {
            appearance: 'fill'
          } as MatFormFieldDefaultOptions
        }
      ]
}) 

export class RequestHistoryComponent implements OnInit{
    layoutCtrl = new UntypedFormControl('boxed');

    /**
     * Simulating a service with HTTP that returns Observables
     * You probably want to remove this and do all requests in a service with HTTP
     */
    subject$: ReplaySubject<Customer[]> = new ReplaySubject<Customer[]>(1);
    data$: Observable<Customer[]> = this.subject$.asObservable();
    customers: Customer[];
    range = new FormGroup({
        start: new FormControl<Date | null>(null),
        end: new FormControl<Date | null>(null),
    });
    @Input()
    columns: TableColumn<Customer>[] = [
      { label: 'ID', property: 'id', type: 'text', visible: true, cssClasses: ['font-medium'] },
      { label: 'First Name', property: 'firstName', type: 'text', visible: true, cssClasses: ['font-medium'] },
      { label: 'Last Name', property: 'lastName', type: 'text', visible: true , cssClasses: ['font-medium']},
      { label: 'Payment Amount', property: 'amount', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
    //   { label: 'Street', property: 'street', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
    //   { label: 'Zipcode', property: 'zipcode', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
    //   { label: 'City', property: 'city', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
      { label: 'Currency', property: 'currency', type: 'text', visible: true, cssClasses: ['text-secondary', 'font-medium'] },
      { label: 'Status', property: 'labels', type: 'button', visible: true },
      { label: 'Actions', property: 'actions', type: 'button', visible: true }
    ];
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 20, 50];
    dataSource: MatTableDataSource<Customer> | null;
    selection = new SelectionModel<Customer>(true, []);
    searchCtrl = new UntypedFormControl();
  
    labels = aioTableLabels;
  
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
  
    constructor(private dialog: MatDialog) {
    }
  
    get visibleColumns() {
      return this.columns.filter(column => column.visible).map(column => column.property);
    }
  
    /**
     * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
     * We are simulating this request here.
     */
    getData() {
      return of(aioTableData.map(customer => new Customer(customer)));
    }
  
    ngOnInit() {
      this.getData().subscribe(customers => {
        this.subject$.next(customers);
      });
  
      this.dataSource = new MatTableDataSource();
  
      this.data$.pipe(
        filter<Customer[]>(Boolean)
      ).subscribe(customers => {
        this.customers = customers;
        this.dataSource.data = customers;
      });
  
    //   this.searchCtrl.valueChanges.pipe(
    //     untilDestroyed(this)
    //   ).subscribe(value => this.onFilterChange(value));
    }
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    createCustomer() {
      this.dialog.open(CustomerCreateUpdateComponent).afterClosed().subscribe((customer: Customer) => {
        /**
         * Customer is the updated customer (if the user pressed Save - otherwise it's null)
         */
        if (customer) {
          /**
           * Here we are updating our local array.
           * You would probably make an HTTP request here.
           */
          this.customers.unshift(new Customer(customer));
          this.subject$.next(this.customers);
        }
      });
    }
  
    updateCustomer(customer: Customer) {
      this.dialog.open(CustomerCreateUpdateComponent, {
        data: customer
      }).afterClosed().subscribe(updatedCustomer => {
        /**
         * Customer is the updated customer (if the user pressed Save - otherwise it's null)
         */
        if (updatedCustomer) {
          /**
           * Here we are updating our local array.
           * You would probably make an HTTP request here.
           */
          const index = this.customers.findIndex((existingCustomer) => existingCustomer.id === updatedCustomer.id);
          this.customers[index] = new Customer(updatedCustomer);
          this.subject$.next(this.customers);
        }
      });
    }
  
    deleteCustomer(customer: Customer) {
      /**
       * Here we are updating our local array.
       * You would probably make an HTTP request here.
       */
      this.customers.splice(this.customers.findIndex((existingCustomer) => existingCustomer.id === customer.id), 1);
      this.selection.deselect(customer);
      this.subject$.next(this.customers);
    }
  
    deleteCustomers(customers: Customer[]) {
      /**
       * Here we are updating our local array.
       * You would probably make an HTTP request here.
       */
      customers.forEach(c => this.deleteCustomer(c));
    }
  
    onFilterChange(value: string) {
      if (!this.dataSource) {
        return;
      }
      value = value.trim();
      value = value.toLowerCase();
      this.dataSource.filter = value;
    }
  
    toggleColumnVisibility(column, event) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      column.visible = !column.visible;
    }
  
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
    }
  
    trackByProperty<T>(index: number, column: TableColumn<T>) {
      return column.property;
    }
  
    onLabelChange(change: MatSelectChange, row: Customer) {
      const index = this.customers.findIndex(c => c === row);
      this.customers[index].labels = change.value;
      this.subject$.next(this.customers);
    }
}