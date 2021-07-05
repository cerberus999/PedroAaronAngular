import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomDate } from 'src/app/@CustomClass/custom-date';
import { GestorServicesService } from 'src/app/@Services/gestor-services.service';

@Component({
  selector: 'app-client-reg',
  templateUrl: './client-reg.component.html',
  styleUrls: ['./client-reg.component.css']
})
export class ClientRegComponent implements OnInit, OnChanges {
  fecha_nacimiento: any;
  patientReg: FormGroup;
  submitted = false;

  constructor(
    private fb:FormBuilder,
    private gestorService: GestorServicesService) {
    this.patientReg = this.fb.group({
      name: ['', Validators.required],
      fat_lastname: ['',Validators.required],
      mat_lastname: ['',Validators.required],
      dateBirth: ['', Validators.required],
      age: [''],
      sex: ['', Validators.required],
      direction: [''],
      telephone: ['',Validators.required],
      securedType: [''],
      comment: ['']
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.property('mat_lastname')?.value !== "" || this.property('pat_lastname')?.value !== ""){
      this.property('mat_lastname')?.clearValidators();
      this.property('pat_lastname')?.clearValidators();
    }
  }

  get f() {
    return this.patientReg.controls
  }

  onSubmit(){
    this.submitted = true;
    this.gestorService.addPatient(this.patientReg.value).subscribe(
      (response) => {console.log(response)
      });
    this.patientReg.reset();
    for(var name in this.patientReg.controls) {
      this.patientReg.controls[name].setErrors(null);
    }
  }

  calcularEdad(){
    var res: string = new CustomDate(this.fecha_nacimiento + " 01:00:00").calcularEdadActual()
    if(res.includes("NaN")){
      this.patientReg.get("age")?.setValue("");
    }else{
      this.patientReg.get("age")?.setValue(res);
    }
  }

  private property(prop: string){
    return this.patientReg.get(prop);
  }
}