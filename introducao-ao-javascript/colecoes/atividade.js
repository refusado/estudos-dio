function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key);    }
  }

  return admins;
}

const usuarios = new Map();

usuarios.set('Pedro', 'Admin');
usuarios.set('Joana', 'User');
usuarios.set('Carla', 'User');
usuarios.set('Luiz', 'Admin');

const admins = getAdmins(usuarios).join(' e ');
const users = [...usuarios.keys()].join(', ');
console.log(`
Os usuários são: ${users}.
Destes usuários, ${admins} são os admins.
`);

// console.log(...usuarios.keys());