//------------------------------------------------------------------------------
// <auto-generated>
//    Este código se generó a partir de una plantilla.
//
//    Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//    Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace GestionActividadesKevinForero.Models
{
    using System;
    
    public partial class SP_ConsultarTareas_Result
    {
        public int IdActividad { get; set; }
        public string Nombre { get; set; }
        public string Estado { get; set; }
        public System.DateTime FechaProyectada { get; set; }
        public Nullable<System.DateTime> FechaInicio { get; set; }
        public Nullable<System.DateTime> FechaCierre { get; set; }
        public System.DateTime FechaCreacion { get; set; }
        public Nullable<int> IdEmpleado { get; set; }
        public string NombreEmpleado { get; set; }
        public string Descripcion { get; set; }
    }
}
