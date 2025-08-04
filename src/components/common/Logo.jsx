import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div>
      <Link to="/" className="inline-block group py-4">
<h1 className="font-bold text-3xl tracking-wide dark:text-white">
  Home
</h1>

      </Link>
    </div>
  );
}

export default Logo;
