export const load = async ({ fetch, params, redirect }) => {
    if (!import.meta.env.SSR) {
        const token = localStorage.getItem("token");
        console.log("Token:", token);
        if (token == null) {
            redirect(302, "/");
        }
    }
};
