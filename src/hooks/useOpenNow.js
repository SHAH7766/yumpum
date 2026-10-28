import { useState, useEffect } from 'react';
import { siteInfo } from '../data/siteData';

export const useOpenNow = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [statusText, setStatusText] = useState('Open Now (Until 3:00 AM)');

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const timeInMinutes = currentHour * 60 + currentMinute;

      // 11:00 AM = 11 * 60 = 660 mins
      // 3:00 AM next day = 3 * 60 = 180 mins
      const openMinutes = siteInfo.openHour * 60; // 660
      const closeMinutes = siteInfo.closeHour * 60; // 180 (next day)

      let currentlyOpen = false;
      if (timeInMinutes >= openMinutes || timeInMinutes < closeMinutes) {
        currentlyOpen = true;
      }

      setIsOpen(currentlyOpen);
      setStatusText(
        currentlyOpen
          ? 'Open Now · Closes at 3:00 AM'
          : 'Closed Now · Opens daily at 11:00 AM'
      );
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return { isOpen, statusText };
};
