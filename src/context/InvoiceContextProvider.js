import { createContext, useContext, useState, useEffect, useRef } from "react";
import { initalInvoices } from "@/data/data";
import { useRouter } from "next/router";

const InvoiceContext = createContext();

export function useInvoices() {
  return useContext(InvoiceContext);
}

export default function InvoiceContextProvider({ children }) {
  const router = useRouter();
  const [invoices, setInvoices] = useState(initalInvoices);
  const [invoiceStatusSelection, setInvoiceStatusSelection] = useState([]);
  const [userSelections, setUserSelections] = useState([]);
  const [invoiceFormIsOpen, setInvoiceFormIsOpen] = useState(false);

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

  const saveInvoiceChanges = (invoice) => {
    setInvoices([
      ...invoices.map((currInvoice) =>
        currInvoice.id === invoice.id ? invoice : currInvoice
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
        invoiceFormIsOpen,
        setInvoiceFormIsOpen,
        saveInvoiceChanges,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
}
