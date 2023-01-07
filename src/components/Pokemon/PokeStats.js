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
          console.log("Capture Rate:");
          console.log(item.base_stat- 20);
          let myCaptureRate = item.base_stat - 30;
          return (
            <div key={index} className="bar-item">
              <div className="bar">
                <div
                  style={{ height: Math.max(((myCaptureRate)*200 / 255), 0) }}
                  className={`bar-active ${types[0].type.name}`}
                />
                <div className="container-label">
                  <p className="value">{Math.round(myCaptureRate * 100 / 255) + " %"}</p>
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
