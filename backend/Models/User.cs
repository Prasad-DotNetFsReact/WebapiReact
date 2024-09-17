﻿using System.ComponentModel.DataAnnotations.Schema;

namespace BookWebApi_ReactIntegration.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? Username { get; set; } 
        public string? Password { get; set; } 

        public int RoleId { get; set; }
        [ForeignKey("RoleId")]
        public Role? Role { get; set; }
    }
}