import { useEffect, useRef, useState } from "react";
import { search, locate, extend } from "../assets";
import { MapContainer } from "../components";
import { Button, Form, InputGroup, Accordion } from "react-bootstrap";
import Select from "react-select";
import { Waveform } from "@uiball/loaders";
import axios from "axios";
import { mapCategoryOptions } from "../utils";

const NearByPage = () => {
  const [query, setQuery] = useState("");
  const queryRef = useRef();
  const [loading, setLoading] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({
    lat: 19.0785451,
    lng: 72.878176,
  });
  const [nearby, setNearby] = useState([]);
  const [queryCategory, setQueryCategory] = useState("healthcare.hospital");

  const findNearby = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://api.geoapify.com/v2/places?categories=${queryCategory}&filter=circle:${
        currentPosition.lng
      },${currentPosition.lat},3000&bias=proximity:${currentPosition.lng},${
        currentPosition.lat
      }&limit=20&apiKey=${import.meta.env.VITE_GEOAPIFY_API}`
    );
    var nearbyLocations = [];
    res.data.features.forEach((feature) => {
      nearbyLocations.push({
        name: feature.properties.name,
        address: feature.properties.address_line2,
        lat: feature.properties.lat,
        lng: feature.properties.lon,
        distance: feature.properties.distance,
      });
    });
    setLoading(false);
    setNearby(nearbyLocations);
  };

  useEffect(() => {
    reverseGeocode();
    findNearby();
  }, [currentPosition, queryCategory]);

  const geocode = async (query) => {
    const res = await axios.get("https://api.geoapify.com/v1/geocode/search", {
      params: {
        text: query,
        lang: "en",
        limit: 1,
        format: "json",
        apiKey: import.meta.env.VITE_GEOAPIFY_API,
      },
    });

    setCurrentPosition({
      lat: res.data.results[0].lat,
      lng: res.data.results[0].lon,
    });
  };

  const reverseGeocode = async () => {
    const res = await axios.get("https://api.geoapify.com/v1/geocode/reverse", {
      params: {
        lat: currentPosition.lat,
        lon: currentPosition.lng,
        lang: "en",
        limit: 1,
        format: "json",
        apiKey: import.meta.env.VITE_GEOAPIFY_API,
      },
    });
    queryRef.current.value = res.data.results[0].address_line2;
  };

  const success = async (position) => {
    setCurrentPosition({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
    reverseGeocode();
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success, (err) => {
      console.log(err);
    });
  };

  const colourStyles = {
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: "black",
        color: "#FFF",
      };
    },
    control: (styles) => {
      return {
        ...styles,
        backgroundColor: "black",
        color: "#FFF",
      };
    },
    placeholder: (styles) => {
      return {
        ...styles,
        color: "#FFF",
      };
    },
    dropdownIndicator: (styles) => {
      return {
        ...styles,
        color: "#FFF",
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        color: "#FFF",
        backgroundColor: "#000",
      };
    },
    menuList: (styles) => {
      return {
        ...styles,
        color: "#FFF",
        backgroundColor: "#000",
      };
    },
  };

  return (
    <div className="container">
       {
        loading ? <>
          <div className="absolute w-screen h-screen bg-gray-900 top-0 left-0 z-[98] opacity-50">
          </div>
          <div className='absolute z-[99] top-1/2 left-1/2 '>
            <Waveform size={40} color="cyan" />
          </div>
        </> : null
      }
      <div className="row">
        <div className=" col-2 mx-auto">
          <Select
            className="my-3"
            options={mapCategoryOptions}
            styles={colourStyles}
            defaultValue={mapCategoryOptions[0]}
            onChange={(e) => setQueryCategory(e.value)}
          />
          {/* <InputGroup className="my-3">
            <Form.Select
              aria-label="Default select example"
              className="bg-transparent text-white"
              value={queryCategory}
              onChange={(e) => setQueryCategory(e.target.value)}
            >
              <option key="healthcare.hospital" value="healthcare.hospital">
                Hospitals
              </option>
              <option
                key="healthcare.clinic_or_praxis"
                value="healthcare.clinic_or_praxis"
              >
                Clinics
              </option>
              <option key="healthcare.pharmacy" value="healthcare.pharmacy">
                Pharmacies
              </option>
            </Form.Select>
          </InputGroup> */}
        </div>
        <div className=" col-8 mx-auto">
          <InputGroup className="my-3">
            <Form.Control
              placeholder="Enter your locality..."
              aria-label="location"
              aria-describedby="basic-addon2"
              className="bg-transparent text-white"
              ref={queryRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              style={{ borderColor: "white" }}
              onClick={() => geocode(query)}
            >
              <img src={search} alt="search" className="px-2 px-md-3" />
            </Button>
          </InputGroup>
        </div>
        <div className=" col-2 mx-auto">
          <InputGroup className="my-3">
            <Button
              variant="outline-secondary"
              id="button-addon2"
              className="w-100"
              style={{ borderColor: "white" }}
              onClick={() => getLocation()}
            >
              <img
                src={locate}
                alt=" "
                className="pe-2 d-inline w-[24px] h-[24px] pb-1"
              />
              <span className="text-white">Locate</span>
            </Button>
          </InputGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-5 mx-auto my-3 h-[470px] overflow-y-scroll">
          <Accordion className="rounded-[15px]">
            {nearby.map((loc) => {
              return (
                <Accordion.Item className="bg-[#FFFFFF22]" eventKey={loc.name}>
                  <Accordion.Header className="relative">
                    {loc.name}
                    <img
                      src={extend}
                      alt="click to expand"
                      className="absolute right-[10px] w-[24px] h-[24px]"
                    />
                  </Accordion.Header>
                  <Accordion.Body className="text-white">
                    <p>
                      <span>
                        <b>Address: </b>
                        {loc.address}
                      </span>
                    </p>
                    <p>
                      <span>
                        <b>Latitude: </b>
                        {loc.lat}
                      </span>
                    </p>
                    <p>
                      <span>
                        <b>Longitude: </b>
                        {loc.lng}
                      </span>
                    </p>
                    <p>
                      <span>
                        <b>Distance: </b>
                        {(loc.distance / 1000).toFixed(2)} km
                      </span>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
        <div className="col-7 mx-auto">
          <MapContainer
            currentPosition={currentPosition}
            setCurrentPosition={setCurrentPosition}
            nearby={nearby}
          />
        </div>
      </div>
    </div>
  );
};

export default NearByPage;
