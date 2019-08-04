import React, { useEffect } from 'react';

const Details = ({ getDetails, id }) => {
     useEffect(() => {
          getDetails(id);
     }, []);

     return <div className="details" />;
};

export default Details;
