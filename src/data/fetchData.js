const fetchDataFromJson = async (path) => {
  try {
    const response = await fetch(path);
    if (!response) throw new Error("Network response not ok");
    const data = await response.json();
    // setRoutesData(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchDataFromJson };
