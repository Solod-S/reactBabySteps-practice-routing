import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getInvoiceById } from 'fakeApi';

export const InvoiceDetails = () => {
  const { invoiceId } = useParams();
  // возвращает (<Route path=":invoiceId" +  <NavItem to={`${id}`}>) === {invoiceId: "5554444"}
  const [invoice, setInvoice] = useState(null);
  useEffect(() => {
    getInvoiceById(invoiceId).then(setInvoice);
  }, [invoiceId]);
  console.log(invoice);
  if (!invoice) {
    return;
  }
  const { recipient, account, total, date } = invoice;
  return (
    <div>
      <p>
        <b>Recipient:</b> {recipient}
      </p>
      <p>
        <b>Account number:</b> ${account}
      </p>
      <p>
        <b>Total due:</b> {total}$
      </p>
      <p>
        <b>Invoice date:</b> {new Date(date.created).toLocaleDateString()}
      </p>
      <p>
        <b>Due date:</b> {new Date(date.due).toLocaleDateString()}
      </p>
    </div>
  );
};

// export const InvoiceDetails = () => {
//   const { invoiceId } = useParams();
//   const [invoice, setInvoice] = useState(null);

//   useEffect(() => {
//     getInvoiceById(invoiceId).then(setInvoice);
//   }, [invoiceId]);

//   if (!invoice) {
//     return null;
//   }

//   const { recipient, account, total, date } = invoice;

//   return (
// <div>
//   <p>
//     <b>Recipient:</b> {recipient}
//   </p>
//   <p>
//     <b>Account number:</b> ${account}
//   </p>
//   <p>
//     <b>Total due:</b> {total}$
//   </p>
//   <p>
//     <b>Invoice date:</b> {new Date(date.created).toLocaleDateString()}
//   </p>
//   <p>
//     <b>Due date:</b> {new Date(date.due).toLocaleDateString()}
//   </p>
// </div>
//   );
// };
