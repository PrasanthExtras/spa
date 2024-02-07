// actions.js
export const FETCH_CAR_BRANDS = 'FETCH_CAR_BRANDS';

export const fetchCarBrands = () => {
  return async (dispatch) => {
    try {
      const data = await import('./data.json');

      dispatch({
        type: FETCH_CAR_BRANDS,
        payload: data.carBrands,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
};
