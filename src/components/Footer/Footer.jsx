import React from 'react';

const Footer = () => {
   return (
      <div className='footer p-3 bg-primary text-center'>
         <small>{new Date().getFullYear()}</small>
      </div>
   );
};

export default Footer;