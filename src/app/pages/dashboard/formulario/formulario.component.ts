import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.sass']
})
export class FormularioComponent implements OnInit {

  constructor(private forBuilder: FormBuilder) { }

  get notas() {
    return this.registerForm.get('notas') as FormArray;
  }

  registerForm = this.forBuilder.group({
      notas: this.forBuilder.array([])
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

  refrech(){
    this.notas.controls.splice(0, this.notas.length);
  }

  ngOnInit() {
  }

}
