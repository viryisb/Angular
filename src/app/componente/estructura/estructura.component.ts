import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.css']
})
export class EstructuraComponent implements OnInit {
  mostrar:boolean=true;
  /* usuarios: Array<string>= []; */
  usuarios: string[]= [
    'Pedro',
    'Pablo',
    'Ana',
    'Lucia',
  ];
 alumnos: object[]= [
  {nombre: 'Pedro', apellido: 'Lopez', edad: 34, curso:true, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png'},
  {nombre: 'Lucas', apellido: 'Gimenez', edad: 45, curso:!true, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png'},
  {nombre: 'Ana', apellido: 'Sosa', edad: 35, curso:!true, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png'},
  {nombre: 'pottra', apellido: 'Ariel', edad:85, curso:!true, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png'},
 
   
  ];

alumno={nombre:'',
        apellido:'',
      edad:'',
    curso:'',
  foto:''}
  constructor() { }

  ngOnInit() {
  }
  borrar(index){
    this.alumnos.splice(index,1)
  }
  agregar(){
    console.log(this.alumno);
    this.alumnos.push(this.alumno);
    this.alumno= {nombre:'',
    apellido:'',
    edad:'',
    curso:'',
    foto:''}
  }


}
