import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from "@angular/material/form-field";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { stagger40ms } from "src/@vex/animations/stagger.animation";

@Component({
    templateUrl:'./beneficiary-form.component.html',
    styleUrls:['./beneficiary-form.component.scss'],
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

export class BeneficiaryFormComponent implements OnInit{
    items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    expandedIndex = 0;
    // accounts:any = [];
    beneficiaryForm:FormGroup;
    constructor(
        private _fb:FormBuilder,
    ){}

    ngOnInit(): void {
        this.initSingleRequestForm();
    }

    get fReq(): { [key: string]: AbstractControl } {
        return this.beneficiaryForm.controls;
    }
    initSingleRequestForm(){
        this.beneficiaryForm = this._fb.group({
            id: [],
            name: [null],
            address: [null],
            accountNumber:this._fb.array([]),
            
        });
    }

    get accounts() {
        return this.beneficiaryForm.controls["accountNumber"] as FormArray;
    }
    addAccount() {
        const form = this._fb.group({
            IBAN: [null],
            bankName: [null],
            swiftCode: [null],
        });
      
        this.accounts.push(form);
    }

    deleteAccount(accountIndex: number) {
        this.accounts.removeAt(accountIndex);
    }

    submit(){

    }
    saveDraft(){

    }
    delete(){

    }
}