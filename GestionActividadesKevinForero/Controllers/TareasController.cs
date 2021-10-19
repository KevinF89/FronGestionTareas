using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GestionActividadesKevinForero.Models;
using GestionActividadesKevinForero.WsEmpleados;

namespace GestionActividadesKevinForero.Controllers
{
    public class TareasController : Controller
    {
        // GET: Tareas
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult ConsultarTareas(int IdTarea)
        {
            List<SP_ConsultarTareas_Result> Respuesta = new List<SP_ConsultarTareas_Result>();
                List<Actividades> Actividades = new List<Actividades>();
            ZKFGestionActividadesEntities context = new ZKFGestionActividadesEntities();

            Respuesta = context.SP_ConsultarTareas(IdTarea).ToList();

            foreach (SP_ConsultarTareas_Result rs in Respuesta)
            {
                Actividades.Add(new Actividades
               {
                    IdActividad = rs.IdActividad,
                    Nombre = rs.Nombre,
                    Estado = rs.Estado,
                    FechaCreacion = rs.FechaCreacion.ToShortDateString(),
                    FechaProyectada = rs.FechaProyectada.ToShortDateString(),
                    FechaCierre = rs.FechaCierre.ToString(),
                    FechaInicio = rs.FechaInicio.ToString(),
                    Descripcion = rs.Descripcion,
                    IdEmpleado = rs.IdEmpleado,
                     NombreEmpleado = rs.NombreEmpleado
               
                });
            }

            return Json(Actividades, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public JsonResult EditarTarea(SP_ConsultarTareas_Result Tarea)
        {
            Respuesta Respuesta = new Respuesta();
            try
            {

                ZKFGestionActividadesEntities context = new ZKFGestionActividadesEntities();

                context.SP_EditarTarea(Tarea.IdActividad, Tarea.Nombre, Tarea.Estado, Tarea.FechaInicio, Tarea.FechaCierre, Tarea.IdEmpleado, Tarea.Descripcion);

                Respuesta.valido = true;
                Respuesta.descripcion = "Se ha actualizado la tarea";
            }
            catch (Exception ex)
            {
                Respuesta.valido = false;
                Respuesta.error = ex.Message;
            }

            return Json(Respuesta,JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult CrearTarea(SP_ConsultarTareas_Result Tarea)
        {
            Respuesta Respuesta = new Respuesta();
            try
            {

                ZKFGestionActividadesEntities context = new ZKFGestionActividadesEntities();

                context.SP_CrearTarea( Tarea.Nombre, Tarea.Estado, DateTime.Now, Tarea.FechaProyectada, Tarea.IdEmpleado, Tarea.Descripcion);

                Respuesta.valido = true;
                Respuesta.descripcion = "Se ha Creado la tarea";
            }
            catch (Exception ex)
            {
                Respuesta.valido = false;
                Respuesta.error = ex.Message;
            }

            return Json(Respuesta, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        public JsonResult EliminarTarea(int IdTarea)
        {
            Respuesta Respuesta = new Respuesta();
            try
            {

                ZKFGestionActividadesEntities context = new ZKFGestionActividadesEntities();

                context.SP_EliminarTarea(IdTarea);

                Respuesta.valido = true;
                Respuesta.descripcion = "Se ha Eliminado la tarea";
            }
            catch (Exception ex)
            {
                Respuesta.valido = false;
                Respuesta.error = ex.Message;
            }

            return Json(Respuesta, JsonRequestBehavior.AllowGet);
        }
    }
}