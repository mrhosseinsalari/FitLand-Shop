export type Cart = {
  _id: number;
  productDetail: [];
  coupon: null;
  payDetail: {
    totalOffAmount: number;
    totalPrice: number;
    totalGrossPrice: number;
    orderItems: [];
    productIds: [];
    description: string;
  };
};
