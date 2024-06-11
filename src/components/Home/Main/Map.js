import React from "react";

export default function Map() {
  return (
    <section id="map">
      <div className="container">
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=69.216432%2C41.252041&mode=search&oid=2471714961&ol=biz&z=17.22"
          style={{ borderRadius: "16px" }}
          frameBorder="0"
          width="100%"
          height="600px"
          lang="uz_UZ"
        ></iframe>
      </div>
    </section>
  );
}
