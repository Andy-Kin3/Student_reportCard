module.exports = (sequelize, DataTypes) => {
    
    const Student = sequelize.define("Student", {
        firstName: {
            type: DataTypes.STRING,
            allowedNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowedNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowedNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowedNull: false,
        },
        age: {
            type: DataTypes.DATEONLY,
            allowedNull: false,
        },
        classroom: {
            type: DataTypes.STRING,
            allowedNull: false,
        },
        phone: {
            type: DataTypes.BIGINT(11),
            allowedNull: false,
        },
        subject: {
            type:  DataTypes.JSON,
            allowedNull: false,
        },
        image: {
            type:  DataTypes.STRING
        },
        sex: {
            type: DataTypes.STRING,
            allowedNull: false,
        },
    });
    // Student.associate = (models) => {
    //     Student.hasMany(models.User, {
    //         onDelete: "cascade"
    //     });
    // };
    return Student;
};