export const peticionGet = async (url, headers = {}) => {
    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
        });

        if (!res.ok) {
            throw new Error(`Request error: ${res.status}`);
        }

        return await res.json();
    } catch (error) {
        console.error("peticionGet error:", error);
        throw error;
    }
};
