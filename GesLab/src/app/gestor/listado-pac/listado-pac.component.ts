import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/@Models/patient';
import { GestorServicesService } from 'src/app/@Services/gestor-services.service';

@Component({
  selector: 'app-listado-pac',
  templateUrl: './listado-pac.component.html',
  styleUrls: ['./listado-pac.component.css']
})
export class ListadoPacComponent implements OnInit {
  page: number = 0;
  notFound = false;
  patients: Patient[] = [];

  constructor(
    private patientService: GestorServicesService 
  ) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.notFound = false;
     
    this.patientService.getPatients(this.page).subscribe( 
      (patientsCollected: Patient[]) => {
      this.patients = patientsCollected;
      console.log(this.patients);
    }, (err: any) => {
      console.error(err);
      this.notFound = true;
    }
    );
  }

  nextPage() {
    this.page++;
    this.getPatients();
  }

  editPatient(id: number){
    this.patientService.getPatient(id).subscribe(
      (response) => {console.log(response)
    });
  }
}
