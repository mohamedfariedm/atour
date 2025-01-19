import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./SearchInputLocation.css";
import LocationIcon from "assets/Icons/LocationIcon";
const SearchInputLocation = () => {
  // STATE TO  AVAILABLE CITIES AND THE FILTERED LIST
  const [cities] = useState([
    "Cairo Egypt",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose"
  ]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // FUNCTION FOR INPUT CHANGE
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      const filtered = cities.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  // FUNCTION FOR CITY CLICK ADD TO VLAUE INPUT
  const handleCityClick = (city) => {
    setInputValue(city);
    setFilteredCities([]);
  };

  return (
    <div className={`all-input-search-city position-relative`}>
      {/* ======== START SEARCH INPUT ========= */}
      <div className="input-search-content">
        <input
          type="text"
          id="inputField"
          className="form-control input-search-location"
          placeholder={`إلى أين ؟ حدد وجهتك `}
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="icon-location">
          <LocationIcon />
        </div>
      </div>
      {/* ======== END SEARCH INPUT ========= */}
      {filteredCities.length > 0 && (
        <div className="all-city-search">
          <div className="city-list-info change-scroll">
            {filteredCities.map((city, index) => (
              <div
                key={index}
                className="city-item-one d-flex align-items-center gap-3"
                onClick={() => handleCityClick(city)}
              >
                <div className="icon-air">
                  <FontAwesomeIcon icon={faPlane} />
                </div>{" "}
                {city}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInputLocation;
