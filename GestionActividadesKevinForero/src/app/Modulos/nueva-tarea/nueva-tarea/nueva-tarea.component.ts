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
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.scss']
})
export class NuevaTareaComponent implements OnInit {

 
  public Tareas:Array<Tareas>=[];
  public TareaEditar:Tareas;
  ListEmpleados:Array<Empleados>=[];
  formCreate : FormGroup;
  validacion:string;
  constructor(private router: Router,private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private generalService: GeneralService, private AlertaService:AlertaService) { 
      //this.SpinnerService.show();

this.ConsultarEmplados();

    }

  ngOnInit() {
    this.formCreate  =  this.formBuilder.group({
      txtid:['',[Validators.required,Validators.nullValidator]],
      txtNombres:['',[Validators.required,Validators.nullValidator]],
      txtEstado:['',[Validators.required,Validators.nullValidator]],
      dtfecha:['',[Validators.required,Validators.nullValidator]],
      ddlEmpelado:['',[Validators.required,Validators.nullValidator]],
      txtDescripcion:['',[Validators.required,Validators.nullValidator]]
    });
  }


  ConsultarEmplados()
  {
    try {
      debugger;
     
            //this.SpinnerService.show();
            this.generalService.ConsularEmpleados().then(
              (res: Empleados[]) =>{
      debugger;
   
        this.ListEmpleados = res;
    
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

  
 CrearUsuario(T) {
     //this.SpinnerService.show();
    try {
      debugger;
 
      if(this.formCreate.invalid)
      {
        this.AlertaService.error('Debe diligenciar todos los campos',true,3000)
      }

      this.TareaEditar.Nombre=this.formCreate.get('txtNombres').value;
      this.TareaEditar.Estado=this.formCreate.get('txtEstado').value;
      this.TareaEditar.FechaProyectada=this.formCreate.get('dtfecha').value;
      this.TareaEditar.IdEmpleado=this.formCreate.get('ddlEmpelado').value;
      this.TareaEditar.Descripcion=this.formCreate.get('txtDescripcion').value;
     
            //this.SpinnerService.show();
            this.generalService.CrearTarea(this.TareaEditar).then(
              (res: Respuesta) =>{
      debugger
        
      if(res.valido)
      {
        
        this.TareaEditar=undefined;
        this.AlertaService.success('Se ha actualizado la actividad exitosamente',true,3000);
     
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
