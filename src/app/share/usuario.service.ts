import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService 
{

  private url = "http://localhost:3000/usuarios";

  public usuario: Usuario;
  
  constructor(private http: HttpClient) { }

  getUsuario(id:number)
  {
    return this.http.get(this.url + "/" + id)
  }

  postUsuario(newUser: Usuario)
  {
    return this.http.post(this.url, newUser)
  }

  delUsuario(id:any)
  {
    console.log(id);
    //const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: id}
    const httpOptions = {headers: null, body: id}
    return this.http.delete(this.url, httpOptions)
  }

}
