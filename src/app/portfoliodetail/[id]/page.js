import React from 'react';
import PortfolioDetailDesign from '../../page/portfolio-detail-design';
import { DataArray } from '../../data';

export async function generateStaticParams() {
  // Genera una lista de parámetros estáticos a partir de tus datos
  const params = DataArray.map((_, index) => ({
    id: index.toString(), // Convierte el índice en string si es necesario
  }));

  return params;
}

const Portfolio = (props) => {
  return (
    <React.Fragment>
      <PortfolioDetailDesign
        data={DataArray[props?.params.id]}
        id={props?.params.id}
        DataArray={DataArray}
      />
    </React.Fragment>
  );
};

export default Portfolio;