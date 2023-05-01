import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from "@angular/material/form-field";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { stagger40ms } from "src/@vex/animations/stagger.animation";

@Component({
    templateUrl:'./single-request.component.html',
    styleUrls:['./single-request.component.scss'],
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

export class SingleRequestComponent implements OnInit{

    singleRequestForm:FormGroup;
    constructor(
        private _fb:FormBuilder,
    ){}

    ngOnInit(): void {
        this.initSingleRequestForm();
    }

    get fReq(): { [key: string]: AbstractControl } {
        return this.singleRequestForm.controls;
    }
    initSingleRequestForm(){
        this.singleRequestForm = this._fb.group({
            id: [],
            name: [null, [Validators.required, Validators.min(1), Validators.maxLength(10)]],
            address: [null, [Validators.required]],
            IBAN: [null, [Validators.required,Validators.minLength(4), Validators.maxLength(20)]],
            accountNumber: [null, [Validators.required,Validators.minLength(4), Validators.maxLength(20)]],
            bankName: [null, [Validators.required,Validators.minLength(3), Validators.maxLength(200)]],
            swiftCode: [null, [Validators.required,]],
            amount: [null,[Validators.required,]],
            currency: [null, [Validators.minLength(4), Validators.maxLength(200)]],
            reason: [null, [Validators.required]],
            transferDate:[null, [Validators.required]],
            beneficiaryAccountNumber: [null, [Validators.required]],
            moreInfo:[null]
        });
    }

    submit(){

    }
    saveDraft(){

    }
    delete(){

    }
}