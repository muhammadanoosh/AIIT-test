<script>
    export let data;
    const deleteUser = async (userId) => {
        const response = await fetch("../api", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: userId,
            }),
        });
        console.log(response);
        if (response.ok) {
            alert("User deleted");
        }
    };

    const editUser = async () => {
        const response = await fetch("/api");
        console.log(response);
    };
</script>

<div class="container">
    <div class="d-flex">
        <h2>List of users</h2>
        <button type="button" class="btn btn-primary">Delete</button>
    </div>
    <table class="table">
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
                        <button
                            type="button"
                            class="btn btn-secondary"
                            on:click={() => editUser(user.user_id)}
                        >
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
