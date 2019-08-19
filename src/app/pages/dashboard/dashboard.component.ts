import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router,
              private modalservice: NgbModal,
              private forBuilder: FormBuilder) { }

  get notas() {
    return this.registerForm.get('notas') as FormArray;
  }

  get tarjetas() {
    return this.registerFormTarj.get('tarjetas') as FormArray;
  }

  registerForm = this.forBuilder.group({
    notas: this.forBuilder.array([])
  });

  registerFormTarj = this.forBuilder.group({
    tarjetas: this.forBuilder.array([])
  });

  addNote() {
    const noteFormGroup = this.forBuilder.group({
    note: '',
    date: '',
    time: '',
  });
   this.notas.push(noteFormGroup);
  }

  deleteNote(indice: number) {
    this.notas.removeAt(indice);
  }

  refrech() {
    this.notas.controls.splice(0, this.notas.length);
  }

  addtarjeta() {
    const tarjFormGroup = this.forBuilder.group({
    number: '',
    dates: '',

  });
    this.tarjetas.push(tarjFormGroup);
  }

  deleteTarjeta(indice: number) {
    this.tarjetas.removeAt(indice);
  }

  refrechTarj() {
    this.tarjetas.controls.splice(0, this.tarjetas.length);
  }

  ngOnInit() {
  }

  salir() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}
