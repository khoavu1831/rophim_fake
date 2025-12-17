import { TMDB_TOKEN } from "./tmdb"

export const fetchApi = async (url) => {
    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${TMDB_TOKEN}`,
            "Content-Type": "application/json"
        }
    });
    console.log('BASE_URL:', import.meta.env.VITE_TMDB_BASE_URL)

    if (!res.ok) throw new Error("API error!");
    return res.json();
};