import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/Servicios/general.service';
import {Tareas} from 'src/app/Interfaces/tareas'
import { NgxSpinnerService } from 'ngx-spinner';
import {Empleados} from 'src/app/interfaces/empleados';
import {Respuesta} from 'src/app/Interfaces/respuesta';
import {AlertaService} from 'src/app/Servicios/alerta-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public Tareas:Array<Tareas>=[];
  public TareaEditar:Tareas;
   TareaCrear:Tareas ={
    Descripcion:'',
    Estado:'',
    FechaCierre:null,
    FechaCreacion:null,
    FechaInicio:null,
    FechaProyectada:null,
    IdActividad:0,
    IdEmpleado:0,
    Nombre:'',
    NombreEmpleado:''
  }
  validacion:string;
  ListEmpleados:Array<Empleados>=[];
  formupdate : FormGroup;

    formCreate: FormGroup;

    private router: Router; private formBuilder: FormBuilder;
    private activatedRoute: ActivatedRoute;
    /*private generalService: GeneralService;*/
    private AlertaService: AlertaService;
    constructor(private generalService: GeneralService) { 
      //this.SpinnerService.show();

this.ConsultarEmplados();
this.ConsultarTareas();
    }

public ngOnInit() {
    this.formupdate  =  this.formBuilder.group({
      txtid:['',[Validators.required,Validators.nullValidator]],
      txtNombres:['',[Validators.required,Validators.nullValidator]],
      txtEstado:['',[Validators.required,Validators.nullValidator]],
      dtfecha:['',[Validators.required,Validators.nullValidator]],
      ddlEmpelado:['',[Validators.required,Validators.nullValidator]],
      txtDescripcion:['',[Validators.required,Validators.nullValidator]]
    });

    this.formCreate  =  this.formBuilder.group({
    
      txtNombres:['',[Validators.required,Validators.nullValidator]],
      txtEstado:['',[Validators.required,Validators.nullValidator]],
      dtfecha:['',[Validators.required,Validators.nullValidator]],
      ddlEmpelado:['',[Validators.required,Validators.nullValidator]],
      txtDescripcion:['',[Validators.required,Validators.nullValidator]]
    });

  }

public  ConsultarTareas()
  {
    try {    
            //this.SpinnerService.show();
            this.generalService.ConsularTareas().then(
              (res: Tareas[]) =>{
        this.Tareas = res;
        //this.SpinnerService.hide();

        },
        (rej)=>{
          console.log(rej);
      
        }
        );
        }
        catch (error) {
          console.log(error);
      
          //this.SpinnerService.hide();
          }
  }

public IrAModulo(id: number, ruta: string) {
    this.router.navigate([ ruta , id ],{skipLocationChange:true});
  }
public ConsultarEmplados()
{
    debugger
    try {
            //this.SpinnerService.show();
            this.generalService.ConsularEmpleados().then(
                (res: Empleados[]) => {
                    debugger
                    this.ListEmpleados = res;
                    return true;
        },
        (rej)=>{
          console.log(rej);
            return false;
        }
        );
        }
        catch (error) {
          console.log(error);
        return false;
          //this.SpinnerService.hide();
          }
  }

public seleccionar(T) {
    this.TareaEditar=T;

    this.formupdate.controls['ddlEmpelado'].setValue(this.TareaEditar.IdEmpleado);
    this.formupdate.controls['dtfecha'].setValue(this.TareaEditar.FechaProyectada);
    
  }

public ActualizarUsuario(T) {
    //this.SpinnerService.show();
    try {
      debugger;

      this.validacion="";
   if(this.formupdate.invalid)
   {
     this.AlertaService.error('Debe diligenciar todos los campos',true,3000)
	 this.validacion="Debe diligenciar todos los campos";
	 return;
   }
      if(this.TareaEditar.IdEmpleado==undefined || this.TareaEditar.IdEmpleado==0)
      {
        if(this.formupdate.get('ddlEmpelado').value !="")
        {
          this.TareaEditar.IdEmpleado=this.formupdate.get('ddlEmpelado').value;
        }
      }

      if(this.TareaEditar.FechaProyectada==undefined || this.TareaEditar.FechaProyectada==null)
      {
        if(this.formupdate.get('dtfecha').value !="")
        {
          this.TareaEditar.FechaProyectada=this.formupdate.get('dtfecha').value;
        }
      }
      this.TareaEditar.FechaProyectada=this.formupdate.get('dtfecha').value;
            //this.SpinnerService.show();
            this.generalService.EditarTarea(this.TareaEditar).then(
              (res: Respuesta) =>{
      debugger
        
      if(res.valido)
      {
       
        this.TareaEditar=undefined;
        this.AlertaService.success('Se ha actualizado la actividad exitosamente',true,3000);
        this.ConsultarTareas();
      }
      //this.SpinnerService.hide();
      
        },
        (rej)=>{
          console.log(rej);
          //this.SpinnerService.hide();
        }
        );
        }
        catch (error) {
          console.log(error);
      
          //this.SpinnerService.hide();
          }
  }

public borrar(T) {
    //this.SpinnerService.show();
    try {
      debugger;
     
            //this.SpinnerService.show();
            this.generalService.EliminarTarea(T.IdActividad).then(
              (res: Respuesta) =>{
      debugger
      if(res.valido)
      {
        alert('Se ha eliminado la area exitosamente');
        this.TareaEditar=undefined;
        this.AlertaService.success('Se ha eliminado la tarea exitosamente',true,3000);
        this.ConsultarTareas();
      }
        //this.SpinnerService.hide();
          
      
        },
        (rej)=>{
          console.log(rej);
          //this.SpinnerService.hide();
        }
        );
        }
        catch (error) {
          console.log(error);
      
          //this.SpinnerService.hide();
          }
  }
   
public CrearTarea(T) {
  //this.SpinnerService.show();
 try {
   debugger;
this.validacion="";
   if(this.formCreate.invalid)
   {
     this.AlertaService.error('Debe diligenciar todos los campos',true,3000)
	 this.validacion="Debe diligenciar todos los campos";
	 return;
   }

   this.TareaCrear.Nombre=this.formCreate.get('txtNombres').value;
   this.TareaCrear.Estado=this.formCreate.get('txtEstado').value;
   this.TareaCrear.FechaProyectada=this.formCreate.get('dtfecha').value;
   this.TareaCrear.IdEmpleado=this.formCreate.get('ddlEmpelado').value;
   this.TareaCrear.Descripcion=this.formCreate.get('txtDescripcion').value;
  
         //this.SpinnerService.show();
         this.generalService.CrearTarea(this.TareaCrear).then(
           (res: Respuesta) =>{
   debugger
     
   if(res.valido)
   {
     
     this.TareaEditar=undefined;
     alert('Se ha creado la actividad exitosamente');
     this.AlertaService.success('Se ha creado la actividad exitosamente',true,3000);
     this.ConsultarTareas();
  
   }
   //this.SpinnerService.hide();
   
     },
     (rej)=>{
       console.log(rej);
       //this.SpinnerService.hide();
     }
     );
     }
     catch (error) {
       console.log(error);
   
       //this.SpinnerService.hide();
       }
}
  

}
