﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Este código fue generado por una herramienta.
//     Versión de runtime:4.0.30319.42000
//
//     Los cambios en este archivo podrían causar un comportamiento incorrecto y se perderán si
//     se vuelve a generar el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace GestionActividadesKevinForero.WsEmpleados {
    using System.Runtime.Serialization;
    using System;
    
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="TEmpleados", Namespace="http://schemas.datacontract.org/2004/07/")]
    [System.SerializableAttribute()]
    public partial class TEmpleados : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged {
        
        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string CorreoField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string DocumentoField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private int IdEmpleadoField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string NombreField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string contactoField;
        
        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData {
            get {
                return this.extensionDataField;
            }
            set {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Correo {
            get {
                return this.CorreoField;
            }
            set {
                if ((object.ReferenceEquals(this.CorreoField, value) != true)) {
                    this.CorreoField = value;
                    this.RaisePropertyChanged("Correo");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Documento {
            get {
                return this.DocumentoField;
            }
            set {
                if ((object.ReferenceEquals(this.DocumentoField, value) != true)) {
                    this.DocumentoField = value;
                    this.RaisePropertyChanged("Documento");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int IdEmpleado {
            get {
                return this.IdEmpleadoField;
            }
            set {
                if ((this.IdEmpleadoField.Equals(value) != true)) {
                    this.IdEmpleadoField = value;
                    this.RaisePropertyChanged("IdEmpleado");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Nombre {
            get {
                return this.NombreField;
            }
            set {
                if ((object.ReferenceEquals(this.NombreField, value) != true)) {
                    this.NombreField = value;
                    this.RaisePropertyChanged("Nombre");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string contacto {
            get {
                return this.contactoField;
            }
            set {
                if ((object.ReferenceEquals(this.contactoField, value) != true)) {
                    this.contactoField = value;
                    this.RaisePropertyChanged("contacto");
                }
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="WsEmpleados.IEmpleados")]
    public interface IEmpleados {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmpleados/ConsultarEmpleados", ReplyAction="http://tempuri.org/IEmpleados/ConsultarEmpleadosResponse")]
        GestionActividadesKevinForero.WsEmpleados.TEmpleados[] ConsultarEmpleados();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IEmpleados/ConsultarEmpleados", ReplyAction="http://tempuri.org/IEmpleados/ConsultarEmpleadosResponse")]
        System.Threading.Tasks.Task<GestionActividadesKevinForero.WsEmpleados.TEmpleados[]> ConsultarEmpleadosAsync();
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IEmpleadosChannel : GestionActividadesKevinForero.WsEmpleados.IEmpleados, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class EmpleadosClient : System.ServiceModel.ClientBase<GestionActividadesKevinForero.WsEmpleados.IEmpleados>, GestionActividadesKevinForero.WsEmpleados.IEmpleados {
        
        public EmpleadosClient() {
        }
        
        public EmpleadosClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public EmpleadosClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public EmpleadosClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public EmpleadosClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public GestionActividadesKevinForero.WsEmpleados.TEmpleados[] ConsultarEmpleados() {
            return base.Channel.ConsultarEmpleados();
        }
        
        public System.Threading.Tasks.Task<GestionActividadesKevinForero.WsEmpleados.TEmpleados[]> ConsultarEmpleadosAsync() {
            return base.Channel.ConsultarEmpleadosAsync();
        }
    }
}