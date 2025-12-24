// hooks/useRouteConfig.ts
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { payment } from '@/data/paymentLink';

interface RouteConfig {
  link: string;
  buttonText: string;
}

const ROUTE_CONFIG: Record<string, RouteConfig> = {
  '/students': {
    link: payment?.studentRouteLink || '#',
    buttonText: 'Apply Now'
  },  
  '/professionals': { 
    link: payment?.professionRouteLink || '#',
    buttonText: "Apply Now"
  },
  '/fullstack': {
    link: payment?.fullstackLink || '#',
    buttonText: 'Apply Now'
  },
  'default': {
    link: payment?.paymentLink || '#',
    buttonText: 'Apply Now'
  }
};

export const useRouteConfig = () => {
  const pathname = usePathname();
  const [config, setConfig] = useState<RouteConfig>(ROUTE_CONFIG.default);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const routeConfig = ROUTE_CONFIG[pathname] || ROUTE_CONFIG.default;
      setConfig(routeConfig);
    }
  }, [pathname]);

  return isClient ? config : ROUTE_CONFIG.default;
};