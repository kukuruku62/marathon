import React from "react";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Tooltip, Polyline } from "react-leaflet";


import styles from "./MapOfEvent.module.scss";


export const MapOfEvent = () => {

  //ДАННЫЕ ТОЧЕК ДЛЯ КАРТЫ
  const a = [
    ["48.278962", "17.048748"],
    ["48.279956", "17.056722"],
    ["48.279293", "17.057027"],
    ["48.278909", "17.057413"],
    ["48.278139", "17.058670"],
    ["48.276240", "17.062826"],
    ["48.275758", "17.063505"],
    ["48.273810", "17.065514"],
    ["48.272373", "17.066825"],
    ["48.270749", "17.068806"],
    ["48.268603", "17.071823"],
    ["48.267209", "17.073606"],
    ["48.266836", "17.074684"],
    ["48.266091", "17.076342"],
    ["48.265622", "17.077773"],
    ["48.265221", "17.079535"],
    ["48.265056", "17.079784"],
    ["48.264297", "17.082687"],
    ["48.263731", "17.083205"],
    ["48.263866", "17.081853"],
    ["48.263836", "17.081405"],
    ["48.263739", "17.081182"],
    ["48.263389", "17.080399"],
    ["48.262556", "17.079337"],
    ["48.262300", "17.079312"],
    ["48.261952", "17.079598"],
    ["48.261822", "17.079688"],
    ["48.261751", "17.079704"],
    ["48.261653", "17.079663"],
    ["48.261349", "17.079672"],
    ["48.261126", "17.079810"],
    ["48.260208", "17.080382"],
    ["48.259410", "17.081230"],
    ["48.259231", "17.081472"],
    ["48.257440", "17.083243"],
    ["48.257294", "17.083297"],
    ["48.257031", "17.083302"],
    ["48.256548", "17.083376"],
    ["48.255966", "17.083704"],
    ["48.255468", "17.084082"],
    ["48.254895", "17.084625"],
    ["48.254477", "17.085124"],
    ["48.253641", "17.085791"],
    ["48.252481", "17.086444"],
    ["48.252157", "17.086508"],
    ["48.251875", "17.086355"],
    ["48.251039", "17.085522"],
    ["48.250473", "17.084993"],
    ["48.249648", "17.084333"],
    ["48.249249", "17.083771"],
    ["48.249734", "17.082395"],
    ["48.249850", "17.081546"],
    ["48.249794", "17.081218"],
    ["48.249891", "17.080984"],
    ["48.250097", "17.080658"],
    ["48.250452", "17.080194"],
    ["48.250824", "17.079930"],
    ["48.251627", "17.078962"],
    ["48.252109", "17.078301"],
    ["48.253283", "17.076602"],
    ["48.253660", "17.076004"],
    ["48.254205", "17.075469"],
    ["48.254415", "17.075447"],
    ["48.254670", "17.075294"],
    ["48.254781", "17.075195"],
    ["48.255110", "17.075003"],
    ["48.255381", "17.074913"],
    ["48.255731", "17.074281"],
    ["48.256320", "17.073592"],
    ["48.256583", "17.073188"],
    ["48.256822", "17.072331"],
    ["48.257043", "17.071999"],
    ["48.257319", "17.071695"],
    ["48.258323", "17.069607"],
    ["48.258728", "17.068930"],
    ["48.258985", "17.068695"],
    ["48.259786", "17.067519"],
    ["48.260633", "17.066690"],
    ["48.260992", "17.066178"],
    ["48.261710", "17.065514"],
    ["48.263037", "17.064694"],
    ["48.263410", "17.064590"],
    ["48.263756", "17.064570"],
    ["48.264185", "17.064029"],
    ["48.265140", "17.063322"],
    ["48.265776", "17.063073"],
    ["48.265969", "17.062838"],
    ["48.266184", "17.062706"],
    ["48.266375", "17.062730"],
    ["48.266846", "17.062945"],
    ["48.267128", "17.062975"],
    ["48.267633", "17.063160"],
    ["48.267921", "17.063192"],
    ["48.268321", "17.063054"],
    ["48.268766", "17.062804"],
    ["48.269231", "17.062714"],
    ["48.269577", "17.062307"],
    ["48.269793", "17.061918"],
    ["48.270031", "17.061284"],
    ["48.270481", "17.061626"],
    ["48.270847", "17.061825"],
    ["48.271467", "17.061740"],
    ["48.271985", "17.061569"],
    ["48.272570", "17.061005"],
    ["48.273114", "17.060407"],
    ["48.274784", "17.056533"],
    ["48.274882", "17.055898"],
    ["48.274800", "17.054799"],
    ["48.275125", "17.053822"],
    ["48.275774", "17.052515"],
    ["48.276273", "17.051779"],
    ["48.277204", "17.050904"],
    ["48.277517", "17.050626"],
    ["48.278810", "17.050872"],
    ["48.278886", "17.050864"],
    ["48.278958", "17.050755"],
    ["48.279096", "17.050524"],
    ["48.279165", "17.050455"],
    ["48.278963", "17.048753"],
  ];


  return (
    <section className={styles.mapWrapper}>
        <h3 className={styles.title}>Route map</h3>
        <p className={styles.description}>*Trasa sa môže meniť v závislosti od poveternostných podmienok.</p>

      <MapContainer
        center={[48.280325, 17.048564]}
        zoom={12}
        className={styles["leaflet-container"]}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[48.2798, 17.0483]}>
          <Tooltip>Nová 66, 900 31 Stupava Bajkservis Registration</Tooltip>
        </Marker>
        <Marker position={[48.278966, 17.048793]}>
          <Tooltip>Start / Finish</Tooltip>
        </Marker>
        <Polyline positions={a} pathOptions={{ color: "#A60000" }} />
      </MapContainer>
    </section>
  );
};
