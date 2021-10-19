using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace GestionActividadesKevinForero.Models
{
    public class Actividades
    {
       
            [DataMember]
            public int IdActividad { get; set; }
            [DataMember]
            public string Nombre { get; set; }
            [DataMember]
            public string Estado { get; set; }
            [DataMember]
            public string FechaProyectada { get; set; }
            [DataMember]
            public string FechaInicio { get; set; }
            [DataMember]
            public string FechaCierre { get; set; }
            [DataMember]
            public string FechaCreacion { get; set; }
            [DataMember]
            public Nullable<int> IdEmpleado { get; set; }
            [DataMember]
            public string NombreEmpleado { get; set; }
            [DataMember]
            public string Descripcion { get; set; }
        
    }
}