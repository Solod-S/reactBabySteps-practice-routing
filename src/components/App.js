import React from 'react';
import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { Invoices } from './Invoices';
import { InvoiceDetails } from './InvoiceDetails';
// import { Sales } from 'pages/Sales';
// import Customers from 'pages/Customers';
// import CustomerProfile from 'pages/CustomerProfile';

const Sales = lazy(() =>
  import('../pages/Sales').then(module => ({
    ...module,
    default: module.Sales,
  }))
);
// если export const Sales
// то где lazy рендериться нужно обвернуть в Suspense ( Layaut)
// асинхроная загрузка (дробим код чтобы все не грузилось постоянно)
const Customers = lazy(() => import('../pages/Customers'));
const CustomerProfile = lazy(() => import('../pages/CustomerProfile'));
// если export default Customers/CustomerProfile
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" />} />
          {/* <Route index element={<div>Homepage index route</div>} /> */}
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<div>Sales index route</div>} />
            <Route path="analytics" element={<div>Analytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route path=":invoiceId" element={<InvoiceDetails />} />
              {/* вложенный маршрут */}
            </Route>
            <Route path="deposits" element={<div>Deposits</div>} />
          </Route>
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:custumerId" element={<CustomerProfile />} />
          {/* паролельный маршрут */}
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
