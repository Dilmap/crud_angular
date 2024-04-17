import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnChanges{

  @Output() enviarDatos = new EventEmitter<{ nombre: string, telefono: string, email: string, direccion: string }>();
  @Input() nombre: string = "";
  @Input() telefono: string = "";
  @Input() email: string = "";
  @Input() direccion: string = "";

  actualizarNombre: string = ""
  actualizarTelefono: string = ""
  actualizarEmail: string = ""
  actualizarDireccion: string = ""

  mostrarNombre: string = "";
  mostrarTelefono: string = "";
  mostrarEmail: string = "";
  mostrarDireccion: string = "";

  mostrarAlert = false
  eliminardato = 0
  Array: any[] = [];
  id: number = 0;
  mostrarDiv = false
  actualizarID: any = 1

  ngOnChanges(changes: SimpleChanges): void {
    if (this.nombre && this.telefono && this.email && this.direccion) {
      alert("Se guardo exitosamente baje para corroborarlo")
      this.agregarUsuario();
    }
  }

  agregarUsuario(): void {
    const nuevoUsuario = {
      id: this.Array.length + 1,
      mostrarNombre: this.nombre,
      mostrarTelefono: this.telefono,
      mostrarEmail: this.email,
      mostrarDireccion: this.direccion
    };
    this.Array.push(nuevoUsuario);
  }

  EliminarAdvertencia(index: number) {
    this.mostrarAlert = true
    this.eliminardato = index
  }
  eliminar() {
    this.Array.splice(this.eliminardato, 1);
    this.mostrarAlert = false
  }

  actualizardatos(index: number) {
    this.actualizarNombre = this.Array[index].mostrarNombre
    this.actualizarTelefono = this.Array[index].mostrarTelefono
    this.actualizarEmail = this.Array[index].mostrarEmail
    this.actualizarDireccion = this.Array[index].mostrarDireccion
    for (let i = 0; i < this.Array.length; i++) {
      if (index === i) {
        this.actualizarID = i
      }
    }
    this.mostrarDiv = true
  }

  Actulizaarray() {
    this.enviarDatos.emit({ nombre: this.mostrarNombre, telefono: this.mostrarTelefono, email: this.mostrarEmail, direccion: this.mostrarDireccion });
    this.Array[this.actualizarID].mostrarNombre = this.actualizarNombre;
    this.Array[this.actualizarID].mostrarTelefono = this.actualizarTelefono;
    this.Array[this.actualizarID].mostrarEmail = this.actualizarEmail;
    this.Array[this.actualizarID].mostrarDireccion = this.actualizarDireccion;
    this.mostrarDiv = false
  }
}
