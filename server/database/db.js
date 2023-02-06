// importando la funcion Sequelize de la libreria sequelize para iniciar la coneccion con la base de datos
import { Sequelize } from 'sequelize';

// iniciando la conexion con la base de datos
const db = new Sequelize('db_angularprueba', 'usuario', 'contraseña', {
  host: 'host',
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
        rejectUnauthorized: true,        
    }
}
});

// exportandol aconexion con la base de datos
export default db;