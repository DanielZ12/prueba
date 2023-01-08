const db = require("../database/models");

module.exports = {
  all: async (req, res) => {
    try {
      const reservations = await db.Reservation.findAll({
        include: [{ model: db.Status }, { model: db.Billing }],

        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      return res.status(201).json({
        ok: true,
        status: 201,
        data: reservations,
      });
    } catch (e) {
      console.log("ERROR", e);
    }
  },
  create: async (req, res) => {
    try {
      const { room, countDays, billingId, statusId } = req.body;
      if (billingId) {
        const billing = await db.Billing.findByPk(billingId);
        if (billing) {
          const reservation = await db.Reservation.create({
            room: room,
            countDays: countDays,
            billingId: billingId,
            statusId: 2,
          });
          return res.status(201).json({
            ok: true,
            status: 201,
            statusId: reservation,
          });
        }
      }
      const reservation = await db.Reservation.create({
        ...req.body,
        statusId: 1,
      });
      return res.status(201).json({
        ok: true,
        status: 201,
        data: reservation,
      });
    } catch (error) {
      console.log(`Create reservation error: ${error}`);
      return res.status(500).json({
        ok: false,
        status: 500,
        data: `Create reservation error: ${error}`,
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { billingId } = req.body;

      const billing = await db.Billing.findByPk(billingId);
      if (billing) {
        const updateReservation = await db.Reservation.update(
          {
            statusId: 2,
            billingId,
          },
          {
            where: {
              id: id,
            },
          }
        );
        return res.status(201).json({
            ok: true,
            status: 201,
            data: updateReservation
        })
        
      }
    } catch (error) {
        console.log();
    }
  },
  remove: async(req, res) => {
    
        try {
            const {id} = req.params
            await db.Reservation.update(
                {
                  statusId: 3,
                },
                {
                  where: {
                    id: id,
                  },
                }
              );
            return res.status(201).json({
                ok: true,
                status: 201,
                msg: "La reserva se elimino"
            })
        } catch (error) {
            console.log(error);
        }
  }
};
