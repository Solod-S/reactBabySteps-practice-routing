import { Box } from './Box';
import { AppBar } from './AppBar';
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px 1fr">
      <AppBar />
      <Outlet />
      {/* аутлет нужен чтобы дети зарендерились */}
    </Box>
  );
};

// import { Outlet } from 'react-router-dom';
// import { AppBar } from './AppBar';
// import { Box } from './Box';

// export const Layout = () => {
//   return (
//     <Box display="grid" gridTemplateColumns="200px 1fr">
//       <AppBar />
//       <Outlet />
//     </Box>
//   );
// };
