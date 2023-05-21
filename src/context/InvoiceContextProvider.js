import { createContext, useContext, useState } from "react";
import { initalInvoices } from "@/data/data";

const InvoiceContext = createContext();

export function useInvoices() {
  return useContext(InvoiceContext);
}

export default function InvoiceContextProvider({ children }) {
  const [invoices, setInvoices] = useState(initalInvoices);

  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  const deleteInvoice = (invoice) => {
    setInvoices(...invoices.filter(({ id }) => id !== invoice.id));
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoices,
        addInvoice,
        deleteInvoice,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}
