import { nanoid } from "nanoid";

export const initalInputs = {
  id: nanoid(6),
  createdAt: 0,
  paymentDue: 0,
  description: "",
  paymentTerms: 1,
  clientName: "",
  clientEmail: "",
  status: "",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  items: [
    {
      name: "",
      quantity: 0,
      price: 0,
      total: 0,
    },
  ],
  total: 0,
};
