<script>
    import axios from "axios";
    import { navigate } from "svelte-routing";

    export let data;
    const deleteUser = async (userId) => {
        const response = await axios.delete(
            `http://localhost:5000/api/user/delete-user?userId=${userId}`,
        );
        if (response) {
            window.location.href = "/create";
        }
    };
</script>

<div class="container mt-5">
    <div class="d-flex">
        <h2>List of users</h2>
    </div>
    <div class="table-responsive">
        <table class="table table-bordered shadow-sm">
            <thead>
                <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Full name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Number</th>
                    <th scope="col">Date</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {#each data.users as user}
                    <tr>
                        <td>{user.email}</td>
                        <td>{user.first_name} {user.last_name}</td>
                        <td>{user.address ? user.address : "N/A"}</td>
                        <td>{user.phone_number ? user.phone_number : "N/A"}</td>
                        <td>{user.date_time}</td>
                        <td>
                            <button type="button" class="btn btn-secondary">
                                <a href={`../users/${user.user_id}`}>Edit</a
                                ></button
                            >
                        </td>
                        <td>
                            <button
                                type="button"
                                class="btn btn-danger"
                                on:click={() => deleteUser(user.user_id)}
                                >Delete</button
                            >
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
