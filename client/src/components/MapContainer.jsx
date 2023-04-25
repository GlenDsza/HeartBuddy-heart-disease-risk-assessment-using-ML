import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindow,
  CircleF,
} from "@react-google-maps/api";
import { useState } from "react";
import { search } from "../assets";

const MapContainer = ({ currentPosition, setCurrentPosition, nearby }) => {
  const [selected, setSelected] = useState({});
  const mapStyles = {
    height: "100%",
    width: "100%",
    borderRadius: "15px",
  };

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng });
  };

  return (
    <div className="w-100 h-[470px] my-3">
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GMAPS_API}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={currentPosition}
        >
          <MarkerF
            position={currentPosition}
            animation={2}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true}
          />
          {nearby.map((loc) => {
            return (
              <MarkerF
                key={loc.name}
                position={{ lat: loc.lat, lng: loc.lng }}
                icon={{
                  path: "M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589",
                  fillColor: "black",
                  fillOpacity: 0.9,
                  scale: 1.5,
                  strokeColor: "black",
                  strokeWeight: 2,
                }}
                onClick={() => setSelected(loc)}
              />
            );
          })}
          {selected.name && (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              clickable={true}
              onCloseClick={() => setSelected({})}
              className="px-2 py-2"
            >
              <p>{selected.name}</p>
            </InfoWindow>
          )}
          <CircleF
            center={currentPosition}
            radius={5000}
            options={{
              strokeColor: "#ff0000",
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapContainer;
