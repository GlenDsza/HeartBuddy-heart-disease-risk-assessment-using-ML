import { GoogleMap, LoadScript, useJsApiLoader } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "100%",
    width: "100%",
    borderRadius: "15px",
  };

  const defaultCenter = {
    lat: 41.3851,
    lng: 2.1734,
  };
  return (
    <div className="w-100 h-[470px] my-3">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GMAPS_API}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
      </LoadScript>
    </div>
  );
};

export default MapContainer;
