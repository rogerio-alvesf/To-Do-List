using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Back.Models;

namespace Back.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    {

        private readonly ILogger<UsuarioController> _context;

        public UsuarioController(ILogger<UsuarioController> _context)
        {
            _context = _context;
        }

        [HttpPost]

        public async Task<ActionResult<Usuario>> PostUsuario(Usuario usuario)
        {
            _context.Usuarios.Add(usuario);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUsuario), new AcceptedAtActionResult{})
        }
        public IEnumerable<Usuario> Post(string nome, string email, string senha)
        {
           Usuario usuarioNovo = new Usuario(nome, email,senha);
        }
    }
}
