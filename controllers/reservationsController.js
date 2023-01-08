const db = require('../database/models')

module.exports = {
    all: async (req, res) => {
        try {
             const reservations = await db.Reservation.findAll({
                inclide: [
                    {model: db.Status},
                    { model: db. Billing}
                ]
             })
             return res.status(201).json({
                ok: true,
                status: 201,
                data: reservations,
            });
        } catch (e) {
            console.log("ERROR", e)
        }
    },
}