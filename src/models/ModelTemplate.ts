import { Model } from "sequelize";
import { Sequelize } from "sequelize";

const { Model: M, DataTypes } = require('sequelize');

class ModelTemplate extends M {
    static init(sequelize: Sequelize) {
        super.init({
            // SOME DATATYPES EXAMPLE
            username: DataTypes.STRING,
            money: DataTypes.INTEGER 
        }, {
            sequelize
        });
    }
    static associate(models: Model){
        // IF ANY ASSOCIATION IS REQUIRED
        // this.belongsTo(models.User, { foreignKey: 'user_id', as: 'userId_FK' })
    }
}

module.exports = ModelTemplate;