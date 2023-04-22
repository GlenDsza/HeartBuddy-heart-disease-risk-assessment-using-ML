import { useState } from "react";
import { search } from "../assets";
import { MapContainer } from "../components";
import { Button, Form, InputGroup } from "react-bootstrap";
import axios from "axios";

const NearByPage = () => {
  const [query, setQuery] = useState("");

  const bingSearch = async (query) => {
    const res1 = await axios.get(
      "http://dev.virtualearth.net/REST/v1/Locations",
      {
        params: {
          CountryRegion: "IN",
          addressLine: query,
          key: import.meta.env.VITE_MAPS_API,
        },
      }
    );
    const lat = res1.data.resourceSets[0].resources[0].point.coordinates[0];
    const long = res1.data.resourceSets[0].resources[0].point.coordinates[1];

    const res2 = await axios.get("https://browse.search.hereapi.com/v1", {
      params: {
        apiKey: import.meta.env.VITE_HERE_API,
        at: `${lat},${long}`,
        key: import.meta.env.VITE_MAPS_API,
      },
    });

    console.log(res2);
  };

  return (
    <div className="container">
      <div className="row">
        <div className=" col-12 mx-auto">
          <InputGroup className="my-3">
            <Form.Control
              placeholder="Enter your location..."
              aria-label="location"
              aria-describedby="basic-addon2"
              className="bg-transparent text-white"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              style={{ borderColor: "white" }}
              onClick={() => bingSearch()}
            >
              <img src={search} alt="search" className="px-2 px-md-3" />
            </Button>
          </InputGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-5 mx-auto">
          <InputGroup className="my-3">
            <Form.Control
              placeholder="Enter your location..."
              aria-label="location"
              aria-describedby="basic-addon2"
              style={{ background: "transparent" }}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              style={{ borderColor: "white" }}
            >
              <img src={search} alt="search" className="px-2 px-md-3" />
            </Button>
          </InputGroup>
        </div>
        <div className="col-7 mx-auto">
          <MapContainer />
        </div>
      </div>
    </div>
  );
};

export default NearByPage;
