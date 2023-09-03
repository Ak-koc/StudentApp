namespace StudentAPI.Database
{
    using Microsoft.EntityFrameworkCore;
    using StudentAPI.Entities;
    public class StudentDbContext: DbContext
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options) 
        { 
        }
        public DbSet<Student> Students { get; set; }
    }
}
