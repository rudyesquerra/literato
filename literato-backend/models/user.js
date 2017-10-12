'use strict';
var crypto = require('crypto')
var uuid = require('uuid/v1')

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        encryptedPassword: DataTypes.STRING,
        age: DataTypes.INTEGER,
        salt: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Book, {
                    foreignKey: 'userId',
                    as: 'books'
                })
            }
        },
        setterMethods:{
            password(value){
                if(value){
                    const salt = uuid()
                    this.setDataValue('salt',salt)
                    const hash = this.encrypt(value)
                    this.setDataValue('encryptedPassword', hash)
                }
            }
        },
       instanceMethods: {
            toJSON(){
                return{
                    id: this.get('id'),
                    name: this.get('name'),
                    email: this.get('email'),
                    username: this.get('username'),
                    age: this.get('age')
                }
            },
            encrypt(value){
                const salt = this.get('salt')
                return crypto.createHmac('sha512',salt)
                    .update(value)
                    .digest('hex')
            },
            verifyPassword(unverifiedPassword){
                const encryptedUnverifiedPassword = this.encrypt(unverifiedPassword)
                return encryptedUnverifiedPassword === this.get('encryptedPassword')
            },
        }
    });
    return User;
};
