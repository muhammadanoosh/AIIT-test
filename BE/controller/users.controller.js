const userService = require("../service/user.service");


module.exports = {

    // GET ALL MANAGERS ATTENDANCE
    async getUserDataById(req, res) {
        try {
            const { userId} = req.query;
            const user = await userService.getUserDataById(userId);
            return res.status(200).json(user);
        } catch (error) {
            console.error("Error getting manager attendance:", error);
            return res.status(401).json({ error: "Failed to get attendance" });
        }
    },

    // GET ALL MANAGERS ATTENDANCE
    async updateUserData(req, res) {
        try {
            const {formData} = req.body;
            const user = await userService.updateUserData(formData);
            return res.status(200).json(user);
        } catch (error) {
            console.error("Error getting manager attendance:", error);
            return res.status(401).json({ error: "Failed to get attendance" });
        }
    }

}