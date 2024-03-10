export const load = async ({ fetch }) => {
    try {
        const response = await fetch("../api");
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        const {users} = await response.json();
        return {
            users
        };
    } catch (error) {
        console.error("Error fetching users:", error.message);
        return {
            status: 500,
            error: new Error("Internal Server Error"),
        };
    }
};