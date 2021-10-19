using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

// NOTA: puede usar el comando "Cambiar nombre" del menú "Refactorizar" para cambiar el nombre de interfaz "IEmpleados" en el código y en el archivo de configuración a la vez.
[ServiceContract]
public interface IEmpleados
{
   

        [OperationContract]
        List<TEmpleados> ConsultarEmpleados();
    }
[DataContract]
public class TEmpleados {

    [DataMember]
    public int IdEmpleado { get; set; }
    [DataMember]
    public string Nombre { get; set; }
    [DataMember]
    public string Documento { get; set; }
    [DataMember]
    public string Correo { get; set; }
    [DataMember]
    public string contacto { get; set; }

}
