import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Sales } from 'pages/Sales';
import { Invoices } from './Invoices';
import { InvoiceDetails } from './InvoiceDetails';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Homepage index route</div>} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Sales index route</div>} />
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path="deposits" element={<div>Deposits</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<div>Customers</div>} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>

      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

// import React from 'react';
// import { Sales } from 'pages/Sales';
// import { Toaster } from 'react-hot-toast';
// import { Route, Routes } from 'react-router-dom';
// import { GlobalStyle } from './GlobalStyle';
// import { InvoiceDetails } from './InvoiceDetails';
// import { Invoices } from './Invoices';
// import { Layout } from './Layout';

// export const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<div>Homepage index route</div>} />
//           <Route path="dashboard" element={<div>Dashboard</div>} />
//           <Route path="sales" element={<Sales />}>
//             <Route index element={<div>Sales index route</div>} />
//             <Route path="analytics" element={<div>Analytics</div>} />
//             <Route path="invoices" element={<Invoices />}>
//               <Route index element={<div>Invoices index route</div>} />
//               <Route path=":invoiceId" element={<InvoiceDetails />} />
//             </Route>
//             <Route path="deposits" element={<div>Deposits</div>} />
//           </Route>
//           <Route path="reports" element={<div>Reports</div>} />
//           <Route path="feedback" element={<div>Feedback</div>} />
//           <Route path="customers" element={<div>Customers</div>} />
//         </Route>
//       </Routes>
//       <GlobalStyle />
//       <Toaster position="top-right" reverseOrder={false} />
//     </>
//   );
// };
