module.exports = (sequelize, DataTypes) => {
    
    const Teacher = sequelize.define("Teacher", {
        name: {
            type: DataTypes.STRING,
            allowedNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowedNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowedNull: false,
        },
        phone: {
            type: DataTypes.BIGINT(11),
            allowedNull: false,
        },
        subject: {
            type: DataTypes.STRING,
            allowedNull: false,
        },
        image: {
            type:  DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING,
            allowedNull: false,
        }
    });
    // Teacher.associate = (models) => {
    //     Teacher.hasMany(models.User, {
    //         onDelete: "cascade"
    //     });
    // };
    return Teacher;
};