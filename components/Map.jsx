"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
//leaflet css
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const marker = [
  {
    position: [40.98528, 29.01871],
    title: "Ciya Sofrası",
    sutitle: "Adres: Suntaş Pasajı Kat:1 No:35 Kadıköy/İstanbul",
    img: "/map/1.png",
  },
  {
    position: [41.00562, 28.97634],
    title: "Hamdi Restaurant",
    sutitle: "Adres: Kalçın Sokak No:17 Eminönü/Fatih/İstanbul",
    img: "/map/2.png",
  },
  {
    position: [41.04792, 28.98243],
    title: "Mikla",
    sutitle:
      "Adres: Marmara Park İş Merkezi, Buyukdere Cad. No:5 K:24 Mecidiyeköy/Şişli/İstanbul",
    img: "/map/3.png",
  },
];
const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});
const Map = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  console.log(isMobile);
  return (
    <section id="contact">
      <MapContainer
        center={[41.0082, 28.9784]}
        zoom={isMobile ? 10 : 12}
        className={`${isMobile ? "h-[300px]" : "h-[900px]"} z-10`}
        zoomControl={false}
      >
        <TileLayer
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {/* markers */}
        {marker.map((marker, index) => {
          return (
            <Marker key={index} position={marker.position} icon={customIcon}>
              <Popup>
                <div className="flex gap-x-[40px]">
                  <div>
                    <h3>{marker.title}</h3>
                    <p>{marker.sutitle}</p>
                  </div>
                  <div>
                    <Image src={marker.img} width={140} height={60} alt="" />
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </section>
  );
};
export default Map;
