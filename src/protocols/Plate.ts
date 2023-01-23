export type PlateEntity = {
  id: number;
  name: string;
  price: number;
  description: string;
  cookingTime: number;
  type: string;
};

export type Plate = Omit<PlateEntity, "id">;

