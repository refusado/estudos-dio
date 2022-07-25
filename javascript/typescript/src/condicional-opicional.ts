interface Usuario {
    id: string;
    email: string;
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor';
}

function redirecionar(usuario: Usuario) {
    if (usuario.cargo) {
        // redirecionar(usuario.cargo);
    }

    // redirecionar para área de usuário
}
