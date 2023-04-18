using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace apiUsuarios2.Models
{
    [Table("usuarios")]
    public class Usuarios
    {
        [Key]
        public int id { get; set; }
        public string password { get; set; }
        public string estado { get; set; }
        public DateTime fecha_registro { get; set; }
        public int traba_nr_doc { get; set; }
    }
}
