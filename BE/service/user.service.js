const { pool } = require("../db.service/db.con");
const sql = require("../db.service/queries");


module.exports = {

    // GET ALL MANAGERS REGISTERED  
    async getUserDataById(userId) {
        try {
            const [user] = await pool.query(sql.GET_USER_BY_USER_ID, [userId]);
            return user;

        } catch (error) {
            console.error("Error fetching manager attendance:", error);
            throw error;
        }
    },

    async updateUserData(formData) {
        try {
            const { id, email, name, surname, address, phoneNumber, date } = formData
            const [user] = await pool.query(sql.UPDATE_USER, [name, surname, email, address, phoneNumber, date, id]);
            return user;

        } catch (error) {
            console.error("Error fetching manager attendance:", error);
            throw error;
        }
    },






}