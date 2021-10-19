using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GestionActividadesKevinForero.Models;
using GestionActividadesKevinForero.WsEmpleados;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GestionActividadesKevinForero.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class EmpleadosController : Controller
    {
        // GET: Empleados
        public ActionResult Index()
        {
            return View();
        }
        [System.Web.Mvc.HttpGet]
        public JsonResult ConsultarEmpleados()
        {
            List<WsEmpleados.TEmpleados> Respuesta = new List<WsEmpleados.TEmpleados>();
            WsEmpleados.IEmpleados WsEmp = new EmpleadosClient();

            Respuesta = WsEmp.ConsultarEmpleados().ToList();

            return Json(Respuesta, JsonRequestBehavior.AllowGet);
        }


    }
}