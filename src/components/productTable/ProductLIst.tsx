import { FC } from 'react';
import { useServiceContext } from '../../contexts/servicesContext';
import { Service } from '../../types/service';
import ProductElement from './ProductElement';

const ProductList: FC = () => {
  const services: Service[] = useServiceContext();

  const mainServices = services.filter((item) => item.type === 1);
  return (
    <div>
      {mainServices.map((service) => (
        <ProductElement service={service} key={service.id} />
      ))}
    </div>
  );
};

export default ProductList;
