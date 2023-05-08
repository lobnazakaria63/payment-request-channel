import { Component, Inject, OnInit } from "@angular/core";
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from "@angular/material/form-field";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { stagger40ms } from "src/@vex/animations/stagger.animation";

@Component({
    templateUrl:'./transaction-form.component.html',
    styleUrls:['./transaction-form.component.scss'],
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

export class TransactionFormComponent implements OnInit{
    transactionForm:FormGroup;
    constructor(
        private _fb:FormBuilder,
        public dialogRef: MatDialogRef<TransactionFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ){}

    ngOnInit(): void {
        this.initTransactionForm();
    }

    get fTransaction(): { [key: string]: AbstractControl } {
        return this.transactionForm.controls;
    }
    initTransactionForm(){
        this.transactionForm = this._fb.group({
            amount: [null,[Validators.required,]],
            currency: [null, [Validators.required]],
            reason: [null],
            transferDate:[null, [Validators.required]],
            moreInfo:[null]
            
        });
    }

    submit(){
        this.dialogRef.close(this.transactionForm.value)
    }
    saveDraft(){

    }
    delete(){

    }
}