const db = require('../database/models')
module.exports = {
    allBilling: async (req, res) => {
        try {
            const billings = await db.Billing.findAll()

            return res.status(201).json({
                ok: true,
                status: 201,
                data: billings
            })
        } catch (error) {
            return res.status(500).json({
                ok: true,
                status: 201,
                data: error
            }) 
        }
    },
    billing: async (req, res) => {

        try {
            const { fullName, identification, methodPaid, totalPaid } = req.body
             
            let billing = await db.Billing.create({
                fullName: fullName,
                identification: identification,
                methodPaid: methodPaid,
                totalPaid: totalPaid
            })
            return res.status(201).json({
                ok: true,
                status: 201,
                data: billing
            })

        } catch (error) {
            return res.status(500).json({
                ok: true,
                status: 201,
                data: error
            })
        }
    }
}