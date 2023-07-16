/** @format */

export const createPost = crearAsyncThunk(`createPost`, async (data, { rejectWithValue }) => {
     try {
          const response = await apiRequest("posts/create", data, "POST");
          console.log("USER DETAILS==>", response);
          return response;
     } catch (error) {
          return rejectWithValue(error.response.data);
     }
});
