import { DataI, IProduct } from "../Allts/Typescript";

export const getCategories = async (): Promise<DataI[]> => {
  const categories = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
    {
        next:{
            revalidate:100
        }
    }
  );

  const data: DataI[] = await categories.json();

  return data;
};

export const getProducts = async (): Promise<IProduct[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products",
      {
        next:{
            revalidate:100
        }
    }
  );

  const datas: IProduct[] = await res.json();

  return datas;
};