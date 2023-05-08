import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {  FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from "@angular/material/form-field";
import { MatTableDataSource } from "@angular/material/table";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { stagger40ms } from "src/@vex/animations/stagger.animation";
import { TransactionFormComponent } from "../transaction-form/transaction-form.component";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Observable, map, startWith } from "rxjs";

type AOA = any[][];
@Component({
    selector:'manual-payment',
    templateUrl:'./manual-payment.component.html',
    styleUrls:['./manual-payment.component.scss'],
    animations: [
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

export class ManualPaymentComponent implements OnInit{
    dataSource:MatTableDataSource<any> ;
    requestForm:FormGroup;
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions: Observable<string[]>;
    displayedColumns: string[] = ['beneficiary', 'account', 'transaction', 'actions'];
    @Output() onBack:EventEmitter<any> = new EventEmitter;
    constructor(
        private _fb:FormBuilder,
        public dialog: MatDialog,
        private router:Router
    ){}

    ngOnInit(): void {
       this.initRequestForm();
       this.addRequest()
       
    }

    onBackClick(){
        this.onBack.emit()
    }

    initRequestForm(){
        this.requestForm = this._fb.group({
            request:this._fb.array([]),
        })
    }

    get requests() {
        return this.requestForm.controls["request"] as FormArray;
    }
    addRequest() {
        const form = this._fb.group({
            beneficiary: [null,[Validators.required]],
            account: [null,[Validators.required]],
            transaction:[null,[Validators.required]]
        });
      
        this.requests.push(form);
        this.filteredOptions =form.controls['beneficiary'].valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
          );
          this.filteredOptions =form.controls['account'].valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
          );
        this.dataSource = new MatTableDataSource(this.requests.value)
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
    
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
      }

    deleteRequest(requestIndex: number) {
        this.requests.removeAt(requestIndex);
        this.dataSource = new MatTableDataSource(this.requests.value)
    }

    openTransactionDialog(i:number){
        const dialogRef = this.dialog.open(TransactionFormComponent,{
            width:'500px',
            data: {
              index: i,
            },
          });

        dialogRef.afterClosed().subscribe(result => {
            this.requests.at(i).get('transaction').setValue(result);
        });
    }

    navToCreateNew(){
        this.router.navigateByUrl('/apps/configurations/add-beneficiary');
    }

    onSelectBeneficiary(ev:any){

    }
    onSelectAccount(ev:any){

    }

    submit(){
        console.log(this.requestForm.value)
    }
}