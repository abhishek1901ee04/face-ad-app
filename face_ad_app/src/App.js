import React, { useEffect } from 'react';

const FacebookAd = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse(); // This renders the Facebook plugin
    }
  }, []);

  return (
    <>
      <div className="fb-post" 
         data-href="https://www.facebook.com/ads/archive/render_ad/?id=2086929015110365&access_token=EAAO7ZAlkigEgBO5MDewLYNOJ7k5LnYEPR2sReU4KYiRehtHtAjxbFlueyHQlXkuLM2i3HVEk3uE0CkkZAHFZAMX3t8LNFkkWtyMsZBpyZBDrZBRZAYE2ZCgDdVgsMARxGQG34t57tN5HoWZAHECyKAnuHmfeb81ZC2ZAyScghBStesjIsXCd8QwtBkKj7YAg8ldyRW4Kq3sNmZB8mf1QUontbgZDZD" 
         data-width="500">
    </div>
    <div>
      Hello
    </div>
    </>

  );
};

export default FacebookAd;
