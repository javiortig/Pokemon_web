import React from "react";

const PokeStats = ({ stats, types }) => {
  return (
    <div className="container-bar mt-0">
      <h4 className="w-100 mb-4 section-title">Stats</h4>
      {stats.map((item, index) => {
        if (item.name == "Health"){
          return (
            <div key={index} className="bar-item">
              <div className="bar">
                <div
                  style={{ height: (item.base_stat*200 / 8) }}
                  className={`bar-active ${types[0].type.name}`}
                />
                <div className="container-label">
                  <p className="value">{item.base_stat}</p>
                </div>
              </div>
              <p className="mb-0 mt-2 text-center label limit-text">
                {item.name}
              </p>
            </div>
          );
        }
        else if (item.name == "Speed"){
          return (
            <div key={index} className="bar-item">
              <div className="bar">
                <div
                  style={{ height: (item.base_stat*200 / 5) }}
                  className={`bar-active ${types[0].type.name}`}
                />
                <div className="container-label">
                  <p className="value">{item.base_stat}</p>
                </div>
              </div>
              <p className="mb-0 mt-2 text-center label limit-text">
                {item.name}
              </p>
            </div>
          );
        }
        else if (item.name == "Capture rate"){
          return (
            <div key={index} className="bar-item">
              <div className="bar">
                <div
                  style={{ height: Math.max(((item.base_stat- 20)*200 / 100), 5) }}
                  className={`bar-active ${types[0].type.name}`}
                />
                <div className="container-label">
                  <p className="value">{(item.base_stat- 20) + " %"}</p>
                </div>
              </div>
              <p className="mb-0 mt-2 text-center label limit-text">
                {item.name}
              </p>
            </div>
          );
        }
        else{
          return (<></>);
        }
        
      })}
    </div>
  );
};

export default PokeStats;
