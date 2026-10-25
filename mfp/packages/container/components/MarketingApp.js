import { mountMarketingApp } from 'marketing/MarketingApp';
import React, { useEffect, useRef } from 'react';


export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mountMarketingApp(ref.current);
    }, []);

    return <div ref={ref} />;
}
