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
        salt: DataTypes.STRING,
        authToken: DataTypes.STRING,
        authTokenExpiration: DataTypes.DATE
    }, {
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Book, {
                    foreignKey: 'userId',
                    as: 'books'
                }),
                User.hasMany(models.Request, {
                    foreignKey: 'user1Id',
                    as: 'Requests'
                }),
                User.hasMany(models.Request, {
                    foreignKey: 'user2Id',
                    as: 'Requests'
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
                return {
                    id: this.get('id'),
                    name: this.get('name'),
                    email: this.get('email'),
                    username: this.get('username'),
                    age: this.get('age'),
                    authToken: this.get('authToken'),
                    authTokenExpiration: this.get('authTokenExpiration')
                }
            },
            setAuthToken(){
                const token = uuid()
                const expiration = new Date()
                expiration.setMonth(expiration.getMonth() + 1)
                this.setDataValue('authToken', token)
                this.setDataValue('authTokenExpiration', expiration)
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
            authExpired(){
                return new Date() > this.get('authTokenExpiration')
            }
        },
        hooks:{
            beforeCreate: function(user, options){
                user.setAuthToken()
            }
        }
    });
    return User;
};
