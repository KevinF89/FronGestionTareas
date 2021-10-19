
import { Injectable, OnInit} from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Tareas} from '../interfaces/tareas';
import {Empleados} from '../interfaces/empleados';
import {Respuesta} from '../interfaces/respuesta';



@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  ConsularEmpleados() {
    return new Promise((resolve,reject) =>{ 
        try{
          debugger;
            let UrlLogin = 'http://localhost:64565/Empleados/ConsultarEmpleados';
          this.get(UrlLogin,false).subscribe((response: Empleados[]) =>{
            
              resolve(response);
           
          },
          (exception)=>{
            
          }
          );
        } 
        catch(ex) {
         
          reject(ex);
        }
      });
      
  }

 

 
  ConsularTareas() {
    return new Promise((resolve,reject) =>{ 
        try{
          debugger;
          let UrlLogin = JSON.parse(sessionStorage.getItem('config')).urlGestion+'/Tareas/ConsultarTareas?IdTarea=0';
          this.get(UrlLogin,false).subscribe((response: Tareas[]) =>{
            debugger
              resolve(response);
           
          },
          (exception)=>{
            debugger
          }
          );
        } 
        catch(ex) {
         debugger
          reject(ex);
        }
      });
      
  }

  EditarTarea(T:Tareas) {
    return new Promise((resolve,reject) =>{ 
        try{
          debugger;
          let UrlLogin = JSON.parse(sessionStorage.getItem('config')).urlGestion ;
          this.post(UrlLogin,'/Tareas/EditarTarea',T,false).subscribe((response: Respuesta) =>{
            if(!response.error){  
              resolve(response);
            }else{
              reject(response);
            }
          },
          (exception)=>{
            
          }
          );
        } 
        catch(ex) {
         
          reject(ex);
        }
      });
      
  }

  CrearTarea(T:Tareas) {
    return new Promise((resolve,reject) =>{ 
        try{
          debugger;
          let UrlLogin = JSON.parse(sessionStorage.getItem('config')).urlGestion ;
          this.post(UrlLogin,'/Tareas/CrearTarea',T,false).subscribe((response: Respuesta) =>{
            if(!response.error){  
              resolve(response);
            }else{
              reject(response);
            }
          },
          (exception)=>{
            
          }
          );
        } 
        catch(ex) {
         
          reject(ex);
        }
      });
      
  }

  EliminarTarea(idtarea:number) {
    return new Promise((resolve,reject) =>{ 
        try{
          debugger;
          let UrlLogin = JSON.parse(sessionStorage.getItem('config')).urlGestion+'/Tareas/EliminarTarea?IdTarea='+idtarea ;
          this.get(UrlLogin,false).subscribe((response: Respuesta) =>{
             
              resolve(response);
            
          },
          (exception)=>{
            
          }
          );
        } 
        catch(ex) {
         
          reject(ex);
        }
      });
      
  }

  private get(url:string,auth:boolean, token?:string){
      debugger
    if(auth){
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer '+ token });
        let options = { headers: headers };
        
        return this.http.get(url,options);
    }else{
      return this.http.get(url);
    
  }
  }
  private post(url:string,metodo:string, body: any, auth:boolean, token?:string){
  
      if(auth){
        ////debugger;
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'bearer '+ token });
          let options = { headers: headers };
          
          return this.http.post(`${ url }${ metodo }`, body, options);
      }else{
        return this.http.post(`${ url }${ metodo }`, body);
      }
    }
}
