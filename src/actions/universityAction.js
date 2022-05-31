import { setUniversity } from '../reducers/universitySlice';
import * as API from '../services/API'

export const loadUniversity = () => async(dispatch) => {
  try {
    // call the api directly
    const { data } = await API.getHongKongUniversity();

    dispatch(setUniversity(data));
  } catch (error) {
    console.log(error.message);
  }
}

