import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from "@angular/material/form-field";
import { NgxFileDropEntry } from "ngx-file-drop";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { stagger40ms } from "src/@vex/animations/stagger.animation";
import * as XLSX from 'xlsx';

type AOA = any[][];
@Component({
    selector:'browse-payments',
    templateUrl:'./browse-payments.component.html',
    styleUrls:['./browse-payments.component.scss'],
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

export class BrowsePaymentComponent implements OnInit{

    batchRequestForm:FormGroup;
    fileToUpload: File | null = null;
    data: AOA ;
    adjustedColArr = [];
    originColArr = [];
    files: NgxFileDropEntry[] = [];
    wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
    @ViewChild('signatureInput') fileInput;
    @Output() onBack:EventEmitter<any> = new EventEmitter;
    constructor(
        private _fb:FormBuilder,
    ){}

    ngOnInit(): void {
       
        this.initSingleRequestForm();
    }

    get fReq(): { [key: string]: AbstractControl } {
        return this.batchRequestForm.controls;
    }
    initSingleRequestForm(){
        this.batchRequestForm = this._fb.group({
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

    openFileSelect(){
        this.fileInput.nativeElement.click();
    }

    dropped(files:any) {
        console.log(files)
         /* wire up file reader */
        const target: DataTransfer = <DataTransfer>(files.target);
        if (target.files.length !== 1) throw new Error('Cannot use multiple files');
        const reader: FileReader = new FileReader();
        reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
        this.adjustedColArr = this.data[0].map(u => (u));
        this.originColArr = this.data[0];
        console.log(this.data);
        };
        reader.readAsBinaryString(target.files[0]);
    }
    onSelectHeader(evt:any,column:string){
        let selectedCol = evt.value;
        this.adjustedColArr.includes(column)?
        this.adjustedColArr = this.data[0].map(u => (u)) : '';
        this.adjustedColArr.filter((col,i) => {
            col === selectedCol ? this.adjustedColArr[i] = column : '';
        })
        console.log(this.data[0],this.adjustedColArr)
    }
    onConfirmMApping(){
        this.data[0] = this.adjustedColArr;
        
    }

    calcTotalAmt(data:any){
        let total;
        for(let i = 1 ; i < data.length ; i++){
            total += data[i].payment_amount
        }
        return +total;
    }
    onFinishMApping(){

    }

    submit(){

    }
    saveDraft(){

    }
    delete(){
        
    }
    onBackClick(){
        this.onBack.emit()
    }
}