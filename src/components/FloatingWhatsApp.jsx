import React from 'react';

export const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-40 flex items-center">
      <a
        href="https://wa.me/923268414405?text=Hi%20YuM%20PuM,%20I%20want%20to%20order!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition transform hover:scale-110 active:scale-95 group"
      >
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping group-hover:hidden" />
        <svg className="w-8 h-8 relative z-10 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.405 0 0 5.405 0 12.05c0 2.126.556 4.202 1.613 6.027L0 24l6.102-1.605a11.803 11.803 0 005.948 1.59h.005c6.643 0 12.048-5.405 12.048-12.05 0-3.228-1.259-6.26-3.543-8.544z"/>
        </svg>
      </a>
    </div>
  );
};
