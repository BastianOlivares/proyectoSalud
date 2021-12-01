import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AngularFirestore } from '@angular/fire/compat/firestore/'; 
import {ServicioService} from '../../servicio.service'
import {Usuario} from '../../interfaces/interface'



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  listaUsuarios=new Array<Usuario>();

  show:number=1;
  formulario:FormGroup;
  formulario2:FormGroup;
  formulario3:FormGroup;

  constructor(form: FormBuilder, form2:FormBuilder, form3:FormBuilder, private firestore:AngularFirestore, private http:ServicioService) { 
    
    this.formulario=form.group({
      nombre:["",Validators.required],
      edad:["",Validators.required],
      email:["",Validators.required],
      fechaNac:["",Validators.required],
      sexo:["",Validators.required]
    });

    this.formulario2=form2.group({
      estatura:["",Validators.required],
      peso:["",Validators.required],
      radioCardio:["",Validators.required],
      cardioCuales:["",Validators.maxLength(20)],
      radioRespiratorio:["",Validators.required],
      respiratoriaCuales:["",Validators.maxLength(20)],
      radioCirugia:["",Validators.required],
      cirugiaCuales:["",Validators.maxLength(20)],
      radioAlergia:["",Validators.required],
      alergiasCuales:["",Validators.maxLength(20)],
      radioRegenerativa:["",Validators.required],
      degenerativaCual:["",Validators.maxLength(20)],
      radioCirugia2:["",Validators.required],
      cirugiaCuales2:["",Validators.maxLength(20)],
    });

    this.formulario3=form3.group({
      radioFutbol:["",Validators.required],
      radioBaloncesto:["",Validators.required],
      radioVoleibol:["",Validators.required],
      radioSalda:["",Validators.required],
      radioZumba:["",Validators.required],
      radioFolklor:["",Validators.required],
    });
  }

  ngOnInit(): void {
  }
  showModal(){
    
  }

  sacarDatosBD () {
    this.http.GetUsuarios().subscribe(datos =>{
      for(let i=0; i<datos.items.length;i++){
        this.listaUsuarios.push(datos.items[i]);
      }
      
    })
  }

  validarFom1() {
    //this.firestore.collection("prueba 1").add({"nombre":"Bastian", "password":"123456"}).then(()=> {
    //  alert("se envio el mensaje")
    //}).catch(err=>{
    //  console.log(err);
    //});
    console.log(this.formulario?.get("nombre")?.value);
    console.log(this.formulario.value);
    this.show=2;
  }
  validarForm2(){
    console.log(this.formulario2.value);
    this.show=3;
  }
  validarForm3() {
    let formularioFinal = {
      "nombre":this.formulario.controls['nombre'].value,
      "edad":this.formulario.controls['edad'].value,
      "email":this.formulario.controls['email'].value,
      "fechaNac":this.formulario.controls['fechaNac'].value,
      "sexo":this.formulario.controls['nombre'].value,
      "estatura":this.formulario2.controls['estatura'].value,
      "peso":this.formulario2.controls['peso'].value,
      "radioCardio":this.formulario2.controls['radioCardio'].value,
      "cardioCuales":this.formulario2.controls['cardioCuales'].value,
      "radioRespiratorio":this.formulario2.controls['radioRespiratorio'].value,
      "respiratoriaCuales":this.formulario2.controls['respiratoriaCuales'].value,
      "radioCirugia":this.formulario2.controls['radioCirugia'].value,
      "cirugiaCuales":this.formulario2.controls['cirugiaCuales'].value,
      "radioAlergia":this.formulario2.controls['radioAlergia'].value,
      "alergiasCuales" :this.formulario2.controls['alergiasCuales'].value,
      "radioRegenerativa":this.formulario2.controls['radioRegenerativa'].value,
      "degenerativaCual":this.formulario2.controls['degenerativaCual'].value,
      "radioCirugia2":this.formulario2.controls['radioCirugia2'].value,
      "cirugiaCuales2":this.formulario2.controls['cirugiaCuales2'].value,
      "radioFutbol":this.formulario3.controls['radioFutbol'].value,
      "radioBaloncesto":this.formulario3.controls['radioBaloncesto'].value,
      "radioVoleibol":this.formulario3.controls['radioVoleibol'].value,
      "radioSalda":this.formulario3.controls['radioSalda'].value,
      "radioZumba":this.formulario3.controls['radioZumba'].value,
      "radioFolklor":this.formulario3.controls['radioFolklor'].value,
      
    }
    console.log(this.formulario3.value);
    this.http.PostUsuario(formularioFinal).subscribe(datos =>{
      console.log(datos);
      
    })
  }



}