import React, { useEffect, useState } from 'react';
import { GetService } from 'service/req';

export const Test = () => {
    const [getName, setGetName] = useState('');
    useEffect(() => {
      GetService('yes').then((res) => {
          setGetName(res);
      });
    
    }, []);
    
    return <React.Fragment>
        get name is {getName}
    </React.Fragment>
}