interface Usuario {
    id: string;
    email: string;
}
interface Admin extends Usuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redireciona(usuario: Usuario | Admin) {
    if ('cargo' in usuario) {
        // redireciona para área de admin
    }
    // redireciona para área do usuário
}
