import { createContext, useContext, useState, useEffect, useRef } from "react";
import { initalInvoices } from "@/data/data";

const InvoiceContext = createContext();

export function useInvoices() {
  return useContext(InvoiceContext);
}

export default function InvoiceContextProvider({ children }) {
  const [invoices, setInvoices] = useState(initalInvoices);
  const [invoiceStatusSelection, setInvoiceStatusSelection] = useState([]);
  const [userSelections, setUserSelections] = useState([]);

  useEffect(() => {
    setUserSelections(
      invoices.filter(({ status }) => invoiceStatusSelection.includes(status))
    );
  }, [invoices, invoiceStatusSelection]);

  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  const deleteInvoice = (id) => {
    setInvoices([...invoices.filter((invoice) => invoice.id !== id)]);
  };

  const markAsPaid = (id) => {
    setInvoices([
      ...invoices.map((invoice) =>
        invoice.id === id ? { ...invoice, status: "Paid" } : invoice
      ),
    ]);
  };

  return (
    <InvoiceContext.Provider
      value={{
        invoices,
        addInvoice,
        deleteInvoice,
        invoiceStatusSelection,
        setInvoiceStatusSelection,
        userSelections,
        markAsPaid,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}
