using System.ComponentModel.DataAnnotations;

namespace SignagePages.Entities
{
    public class WebUser
    {
        public string Id { get; set; }
        [StringLength(32)]
        public string UserName { get; set; }
        public string PasswordHash { get; set; }
    }
}