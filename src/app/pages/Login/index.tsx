import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>My LoginPage</span>
    </>
  );
}
