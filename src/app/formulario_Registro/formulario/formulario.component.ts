import { Component } from '@angular/core';
import { RegistroComponent } from '../registro/registro.component';
import { FormControl, FormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RegistroComponent, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  miFormulario = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
  });

  nombre = ""
  telefono = ""
  email = ""
  direccion = ""

  enviarNombre = ""
  enviarTelefono = ""
  enviarEmail = ""
  enviarDireccion = ""

  recibirDatos(datos: any) {
    this.nombre = datos.nombre
    this.telefono = datos.telefono
    this.email = datos.email
    this.direccion = datos.programa
  }

  envioDatosPadre() {
    this.enviarNombre = this.nombre
    this.enviarTelefono = this.telefono
    this.enviarEmail = this.email
    this.enviarDireccion = this.direccion
    this.nombre = ""
    this.telefono = ""
    this.email = ""
    this.direccion = ""
  }
}
