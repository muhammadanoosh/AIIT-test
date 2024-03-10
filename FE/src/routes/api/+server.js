import { json } from '@sveltejs/kit';
import { pool } from '../../db.services/dbcon';
import { queries } from '../../db.services/queries';

export const GET = async () => {
    try {
        const [users] = await pool.query(queries.GET_ALL_USERS);
        return json({ users })

    } catch (error) {
        // Return a response for internal server error
        console.error("Failed to process request:", error);
        return json({ error: 'Internal Server Error' }, { status: 500 });
    }
};

export const POST = async (e) => {
    try {
        const { requestBody } = await e.request.json();
        // console.log(requestBody);
        const { name, surname, email, address, phoneNumber, date } = requestBody

        const users = await pool.query(queries.INSERT_INTO_USERS,
            [
                name ? name : null,
                surname ? surname : null,
                email ? email : null,
                address ? address : null,
                phoneNumber ? phoneNumber : null,
                date ? date : null
            ]
        );

        if (users.affectedRows === 1) {
            // Return a successful response
            return json({ message: "User created successfully" }, { status: 200 });
        } else {
            // Return a response indicating creation error
            return json({ message: "Creation Error" }, { status: 201 });
        }

    } catch (error) {
        console.error("Failed to process request:", error);
        return {
            status: 500,
            body: { error: "Internal Server Error" }
        };
    }
};

export const DELETE = async (e) => {
    try {
        const { id } = await e.request.json();
        const [users] = await pool.query(queries.DELETE_USER, [id]);
        return json({ message: 'User Deleted' })

    } catch (error) {
        // Return a response for internal server error
        console.error("Failed to process request:", error);
        return json({ error: 'Internal Server Error' }, { status: 500 });
    }
};

// export const PUT = async (e) => {
//     try {
//         const { userId } = await e.request.json();
//         const [user] = await pool.query(queries.GET_USER_BY_USER_ID, [userId]);
//         // console.log(user);
//         return json({ user })

//     } catch (error) {
//         console.error("Failed to process request:", error);
//         return {
//             status: 500,
//             body: { error: "Internal Server Error" }
//         };
//     }
// };