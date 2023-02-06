// importando la funcion Sequelize de la libreria sequelize para iniciar la coneccion con la base de datos
import { Sequelize } from 'sequelize';

// iniciando la conexion con la base de datos
const db = new Sequelize('db_angularprueba', 'nol0pt8ocodu75yhpja7', 'pscale_pw_KBExVAcYmoJPzciXT9qSTNvSLwzMAQTU8vXb8r7RQ22', {
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