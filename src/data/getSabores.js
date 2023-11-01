import { listaDeSabores } from "./saboresData";

const getSaboresList = new Promise((resolve, reject) => {
  resolve(listaDeSabores);
});
export const getSaboresData = async (setState) => {
  try {
    const result = await getSaboresList;
    setState(result);
  } catch (error) {
    alert("Error desconocido, no se pueden ver productos!", error);
  }
};

export const getSabor = () => {
  return getSaboresList;
};

const getSaboresById = (id, array) => array.find((el) => el.id === id);

export const getProductById = async (id, setState) => {
  try {
    const result = await getSaboresList;
    setState(getSaboresById(id, result));
  } catch (error) {
    console.log(error);
  }
};
