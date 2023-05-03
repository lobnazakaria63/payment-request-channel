import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl:'./customer-form.component.html',
    styleUrls:['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit{

    updateForm:FormGroup;
    constructor(
        private _fb:FormBuilder,
    ){}

    ngOnInit(): void {
        this.initUpdateForm()
    }

    get fUpdate(): { [key: string]: AbstractControl } {
        return this.updateForm.controls;
    }
    initUpdateForm(){
        this.updateForm = this._fb.group({
            id: [],
            name: [null, [Validators.required, Validators.min(1), Validators.maxLength(10)]],
            address: [null, [Validators.required]],
            phone:[null, [Validators.required]],
            payment_services:[null,[Validators.required]],
            alert_services:[null,[Validators.required]]
        });
        this.updateForm.controls['id'].setValue(123);
        this.updateForm.controls['id'].disable()
    }
}