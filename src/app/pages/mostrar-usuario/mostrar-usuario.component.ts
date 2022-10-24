import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/share/usuario.service';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.css']
})
export class MostrarUsuarioComponent implements OnInit 
{

  public usuario : Usuario
  public usuarios: Usuario[]

  constructor(public apiService: UsuarioService, private toast: ToastrService) 
  {
    this.apiService.usuarios = [];
  }

  mostrarUsuario(id:string)
  {
    if (id != "")
    {
      this.apiService.getUsuario(id).subscribe((data:Usuario[]) => 
      {    
        this.usuario = data[0];
        if (this.usuario==undefined)
          this.toast.warning("El usuario con id  " + id + " no existe.", "", 
                             {timeOut: 2000, positionClass:'toast-top-center'});
      
        this.apiService.usuarios = null;
      }   
      )
    }
    else
    {
      this.apiService.getUsuarios().subscribe((data:Usuario[]) => 
      {    
        this.apiService.usuarios = data;
        this.usuario = null;
      }   
      )
    }
  }  
  
  ngOnInit(): void 
  {
  }

}
