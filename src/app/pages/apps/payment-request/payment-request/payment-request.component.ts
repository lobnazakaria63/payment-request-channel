import { Component, OnInit, ViewChild } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from "@angular/material/form-field";
import { NgxFileDropEntry } from "ngx-file-drop";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { stagger40ms } from "src/@vex/animations/stagger.animation";
import * as XLSX from 'xlsx';

type AOA = any[][];
@Component({
    templateUrl:'./payment-request.component.html',
    styleUrls:['./payment-request.component.scss'],
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

export class BatchRequestComponent implements OnInit{

    batchRequestForm:FormGroup;
    fileToUpload: File | null = null;
    data: AOA ;
    adjustedColArr = [];
    originColArr = [];
    requestMode;
    files: NgxFileDropEntry[] = [];
    wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
    @ViewChild('signatureInput') fileInput;
    constructor(
        private _fb:FormBuilder,
    ){}

    ngOnInit(): void {
       
    }

    onRequestModeClick(mode:string){
        this.requestMode = mode;
    }
}