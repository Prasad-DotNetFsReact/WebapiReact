using BookWebApi_ReactIntegration.Models;
using Microsoft.EntityFrameworkCore;

namespace BookWebApi_ReactIntegration.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
             : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Publisher> Publishers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Seed data for roles
            modelBuilder.Entity<Role>().HasData(
                new Role { RoleId = 1, RoleName = "Admin" },
                new Role { RoleId = 2, RoleName = "Customer" },
                new Role { RoleId = 3, RoleName = "Moderator" }
            );

            // Seed data for users
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 100,
                    Username = "admin1",
                    Password = "admin1",
                    RoleId = 1
                },
                new User
                {
                    Id = 101,
                    Username = "moderator1",
                    Password = "moderator1",
                    RoleId = 3
                },
                new User
                {
                    Id = 102,
                    Username = "cust1",
                    Password = "cust1",
                    RoleId = 2
                }
            );
        }
    }
}





