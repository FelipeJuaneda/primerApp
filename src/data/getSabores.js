import { listaDeSabores } from "./saboresData";

//OBTENER PRODUCTOS
const getSaboresList = new Promise((resolve, reject) => {
  resolve(listaDeSabores);
});
export const getSaboresData = async (setState) => {
  try {
    const result = await getSaboresList;
    setState(result);
  } catch (error) {
    console.log(error);
    alert("Error desconocido, no se pueden ver productos!");
  }
};

//OBTENER ITEMS
export const getSabor = () => {
  return getSaboresList;
};

//OBTENER PRODUCTOS POR ID
const getSaboresById = (id, array) => array.find((el) => el.id === id);

export const getProductById = async (id, setState) => {
  try {
    const result = await getSaboresList;
    setState(getSaboresById(id, result));
  } catch (error) {
    console.log(error);
  }
};
