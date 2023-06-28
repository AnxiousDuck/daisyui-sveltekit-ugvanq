/** @type {import('./$types').Actions} */
export const actions = {
    default: async (request) => {
        const data = await request.formData();

        console.log(data)

        return { success: true };
    }
};