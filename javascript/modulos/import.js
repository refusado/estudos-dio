// arquivos exportados por named exorts
import {funcao, variavel, classe} from './export.js'; // LEMBRAR DE USAR "." E "/" EM "./arquivo.js"

// arquivos exportados por default exorts
import valorDefault from './export.js';


// é possível importar dando um apelido para função/variavel/classe ->
import { mostraHobby as showHobby } from './export.js';

// importando todos os dados de um arquivo 
import * as INFOS from './export.js';

INFOS.metodoA(); // use pontos para pode usar a informação que estiver querendo do arquivo

console.log(INFOS.variavel); 