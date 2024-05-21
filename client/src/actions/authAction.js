import * as api from "../api";

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);

    dispatch({ type: "AUTH", payload: data });

    if (authData.role === "Student") {
      navigate("/Student");
    } else if (authData.role === "Teacher") {
      navigate("/Teacher");
    } else if (authData.role === "HOD") {
      navigate("/HOD");
    }
  } catch (error) {
    console.log(error);
  }
};

export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);

    dispatch({ type: "AUTH", payload: data });

    if (authData.role === "Student") {
      navigate("/Student");
    } else if (authData.role === "Teacher") {
      navigate("/Teacher");
    } else if (authData.role === "HOD") {
      navigate("/HOD");
    }
  } catch (error) {
    console.log(error);
  }
};
