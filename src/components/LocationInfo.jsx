import React from "react";

export const LocationInfo = ({ location, loading, error }) => {
  const getInfoStyling = (param) => {
    return typeof param === "number"
      ? { symbol: "#", color: "#1CDDB4" }
      : { symbol: `β`, color: "#FFE177" };
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Something went wrong π. Please try again.</h2>;
  }

  return (
    <div className="section-location">
      {!location && (
        <h2>Enter IP and press βSearchβ to get geolocation data</h2>
      )}
      {location && (
        <ul className="section-location__list">
          <li className="section-location__list-item">
            <div className="icon" style={{ backgroundColor: "#B1C7FF" }}>
              tf
            </div>
            <h3 className="text">
              success: <span style={{ color: "#B1C7FF" }}>true</span>
            </h3>
          </li>
          {Object.keys(location).map((param, idx) => {
            const styles = getInfoStyling(location[param]);
            return (
              <li
                className="section-location__list-item"
                key={`${location.param}-${idx}`}
              >
                <div className="icon" style={{ backgroundColor: styles.color }}>
                  {styles.symbol}
                </div>
                <h3 className="text">
                  {param}:
                  <span style={{ color: styles.color }}>
                    {typeof location[param] === "string"
                      ? `β${location[param]}β`
                      : `${location[param]}`}
                  </span>
                </h3>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
