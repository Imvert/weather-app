export const getCity = async (city) => {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_REACT_APP_URL}&key=${
        import.meta.env.VITE_REACT_APP_KEY
      }&q=${city}`
    );
    if (request.status === 200) {
      return request.json();
    } else if (request.status === 400) {
      return;
    }
  } catch (error) {
    console.error(error);
  }
};
