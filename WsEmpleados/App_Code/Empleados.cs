using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

// NOTA: puede usar el comando "Cambiar nombre" del menú "Refactorizar" para cambiar el nombre de clase "Empleados" en el código, en svc y en el archivo de configuración a la vez.
public class Empleados : IEmpleados
{
    public List<TEmpleados> ConsultarEmpleados()
    {
        List<TEmpleados> Respuesta = new List<TEmpleados>();
        List<SP_ListaEmpleados_Result> Resultado = new List<SP_ListaEmpleados_Result>();
        GestionEntities context = new GestionEntities();

        try {
            Resultado = context.SP_ListaEmpleados().ToList();

            foreach (SP_ListaEmpleados_Result a in Resultado)
            {
                Respuesta.Add(new TEmpleados
                {
                    IdEmpleado = a.IdEmpleado,
                    Nombre =a.Nombre,
                    Documento = a.Documento,
                    Correo=a.Correo,
                    contacto=a.contacto
                });
            }

        }
        catch (Exception ex) {

            //registro del error en auditoria no se alcanza a realizar
        }

        return Respuesta;

    }
}
