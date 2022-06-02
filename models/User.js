module.exports = (sequelize, DataTypes) => {
    
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowedNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowedNull: false,
        },
    });
    return User;
};