import axios from "axios";

const API_BASE_URL = "http://localhost:8080/web/api/profile"; // Your Spring Boot base URL

export const getAllProfiles = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/v1/getAllProfile`);
        return response.data;
    } catch (error) {
        console.error("Error fetching profiles:", error);
        throw error;
    }
};

export const getProfileById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/v1/getProfileById`, {
            params: { profileId: id },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching profile with id ${id}:`, error);
        throw error;
    }
};
