import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useEffect, useRef, useState } from "react";
import { MainWrapper } from "../../Shared/Page.styled";
import "./mapstyles.css";

console.log(import.meta.env.VITE_MAPBOX_API_ACCESS_KEY);
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_ACCESS_KEY;

export const MapboxMapsApp = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(13.0099);
  const [lat, setLat] = useState(55.5831);
  const [zoom, setZoom] = useState(11.5);

  const [searchResultName, setSearchResultName] = useState(null);
  const [searchResultLon, setSearchResultLon] = useState(null);
  const [searchResultLat, setSearchResultLat] = useState(null);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [lng, lat],
      zoom: zoom,
      doubleClickZoom: false,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.searchterm.value;
    const url = `https://api.mapbox.com/search/searchbox/v1/forward?q=${value}&access_token=${mapboxgl.accessToken}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const long = data.features[0].properties.coordinates.longitude;
        const lat = data.features[0].properties.coordinates.latitude;

        setSearchResultName(data.features[0].properties.name);
        setSearchResultLon(long);
        setSearchResultLat(lat);

        console.log(map.current);
        console.log(searchResultName);
        console.log(searchResultLon);
        console.log(searchResultLat);

        new mapboxgl.Popup({ closeOnClick: false })
          .setLngLat([long, lat])
          .setHTML(`<h1 style="color:black;">Hello World!</h1>`)
          // För react: använd map.current. INTE map som i documentationen
          .addTo(map.current);
      });
  };
  return (
    <MainWrapper>
      <h1>Mapbox Maps App</h1>
      <div>
        <div className="sidebar">
          <p>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </p>
          <p>
            Search result: {searchResultName}, Lon:{searchResultLon} Lat:
            {searchResultLat}
          </p>
          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="search"
                name="searchterm"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div ref={mapContainer} className="map-container" />
      </div>
    </MainWrapper>
  );
};
