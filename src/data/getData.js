import { listaDeProductos } from "./productsData";

const getById = (id, array) => array.find((el) => el.id === id);

const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(listaDeProductos);
  }, 2000);
});

export const getProductsData = async (setState) => {
  try {
    const result = await getProducts;
    setState(result);
  } catch (error) {
    console.log(error);
    alert("Error desconocido, no se pueden ver productos!");
  }
};

export const getProductById = async (id, setState) => {
  try {
    const result = await getProducts;
    setState(getById(id, result));
  } catch (error) {
    console.log(error);
  }
};
