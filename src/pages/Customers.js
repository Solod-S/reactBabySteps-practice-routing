import { useState, useEffect } from 'react';
import { getCustomers } from 'fakeApi';
import { SearchBox } from 'components/SearchBox';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const location = useLocation();
  // записываем все параметры в локейшен (и передаем в стейт)
  useEffect(() => {
    getCustomers().then(setCustomers);
    console.log(customers);
  }, [customers]);
  const [searchParams, setSearchParams] = useSearchParams();
  // записывает в адрессную строку после ? параметры поиска
  const filterParams = searchParams.get('filter') ?? '';
  console.log(filterParams);
  const onchange = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
    //через тернарник для того чтобы сбросить адрессную строку если строка пустая
    // console.log(searchParams);
  };
  const visibleCustomers = useMemo(() => {
    return customers.filter(c =>
      c.name.toLowerCase().includes(filterParams.toLowerCase())
    );
  }, [customers, filterParams]);
  return (
    <main>
      <SearchBox onchange={onchange} value={filterParams} />
      {customers.length > 0 &&
        visibleCustomers.map(custumer => (
          <li key={custumer.id}>
            <Link to={`${custumer.id}`} state={{ from: location }}>
              {custumer.name}
            </Link>
          </li>
        ))}
    </main>
  );
};
export default Customers;
