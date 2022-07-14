namespace Back.Models
{
    public class Usuario
    {
        private string nome { get; set; }
        private string email { get; set; }
        private string senha { get; set; }

        public Usuario(string nome, string email, string senha)
        {
            this.nome = nome;
            this.email = email;
            this.senha = senha;   
        }
    }
}