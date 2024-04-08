import axios from "axios";
import { API_URL } from  "@env"

export const useEmailCheck = async (email) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/check-email?email=${email}`
    );
    return response.data.isEmailInUse
  } catch (e) {
    return false;
  }
};
