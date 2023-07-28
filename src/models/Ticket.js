const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ticket",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      idPedido: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        defaultValue: () => {
          // Función para generar el ID personalizable con letras "EF" y números autoincrementales
          const prefix = "EF";
          const randomNumber = Math.floor(Math.random() * 10000).toString().padStart(5, "0");
          return prefix + randomNumber;
        }
      },
      idsUser: {
        type: DataTypes.ARRAY(DataTypes.UUID),
      },
      idsCompleteOrder: {
        type: DataTypes.ARRAY(DataTypes.UUID),
      },
      status: {
        type: DataTypes.ENUM,
        values: ["Pendiente",'Aprobado','Rechazado','En proceso','Completo','Entregado'],
        defaultValue: 'Pendiente',
      },    
    createdAt: {
        type: DataTypes.STRING,
        defaultValue: function () {
          const now = new Date();
          const formattedTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(
            2,
            "0"
          )}`;

          return formattedTime;
        },
        allowNull: false,
      },
    },
    {
      timestamps: false, // Deshabilitamos los timestamps generados por Sequelize
    }
    
  );
};