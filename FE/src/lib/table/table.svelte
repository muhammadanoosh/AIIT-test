<script context="module">
    export async function load({ fetch }) {
        const response = await fetch('/table.json');
        const users = await response.json(response);
        console.log(response);

        if (res.ok) {
            return {
                props: {
                    users,
                },
            };
        }
        return {
            status: response.status,
            error: new Error("Couldnot fetch users"),
        };
    }
</script>

<script>
    import DangerButton from "../../UI/DangerButton.svelte";
    import Primarybutton from "../../UI/Primarybutton.svelte";
    import PrimaryButton from "../../UI/Primarybutton.svelte";
    // export let users;
</script>

<div>
    <div class="d-flex"> 
        <h2>List of users</h2>
        <Primarybutton buttonTitle="Create User" />
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
            <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td><PrimaryButton buttonTitle="Edit" /></td>
                <td><DangerButton buttonTitle="Delete" /></td>
            </tr>
        </tbody>
    </table>
</div>
