import { Link, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCustomerById } from 'fakeApi';

const CustomerProfile = () => {
  const { custumerId } = useParams();
  //берет из  <Route path="customers/:custumerId" ==> custumerId (который так же записан в адрессную строку)
  const location = useLocation();
  // то что мы передали в state (<Link to={`${custumer.id}`} state={{ a: 5 }}>
  //             {custumer.name}
  //           </Link>)
  const [custumer, setCustumer] = useState(null);
  console.log(location);
  useEffect(() => {
    getCustomerById(Number(custumerId)).then(setCustumer);
  }, [custumerId]);
  if (!custumer) {
    return;
  }
  return (
    <main>
      <Link to="/customers">Go back</Link>
      {/* не сохраняет значение фильтра(то что добавляли в адрессную строку) */}
      <Link to={location.state?.from ?? '/customers'}>
        {/* если по скопированному линку переходить то будет андефайн и по єтому ? и запасной путь */}
        Go back with location
      </Link>
      <p>id: {custumer.id}</p>
      <p>Username: {custumer.name}</p>
    </main>
  );
};
export default CustomerProfile;
