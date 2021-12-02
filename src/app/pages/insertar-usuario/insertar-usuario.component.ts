import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/share/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-insertar-usuario',
  templateUrl: './insertar-usuario.component.html',
  styleUrls: ['./insertar-usuario.component.css']
})
export class InsertarUsuarioComponent implements OnInit 
{

  public message:string

  constructor(private apiService: UsuarioService) 
  { 
    this.message = null;
  }


  insertarUsuario(nombre:string, apellido1: string, apellido2:string)
  {
    this.apiService.postUsuario(new Usuario(0,nombre,apellido1, apellido2))
    .subscribe((data:string) =>
    {
      console.log(data);
      if (data != "-1")
        alert("Se ha insertado el usuario con id: " + data)
      else
        alert("Error al insertar al usuario");

    })

  } 

  eliminarUsuario(id:string)
  {
    this.apiService.delUsuario({"id":id})
    .subscribe((data) =>
    {
      console.log(data);
    })

  } 
  ngOnInit(): void 
  {
  }

}
