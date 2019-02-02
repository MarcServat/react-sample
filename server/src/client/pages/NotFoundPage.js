import React from 'react';

const NotFoundPage = ({staticContext = {}}) => {
  staticContext.notFound = true;
  return <h1>Ops the route appears to be wrong</h1>;
};

export default {
  component: NotFoundPage
}