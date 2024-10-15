import { useState } from "react";
import { Range } from "react-range";

const PriceFilter = () => {
  const [values, setValues] = useState([10, 40]); // Initial price range

  return (
    <div className="price-filter flex flex-col gap-4">
      <h3 className="text-2xl font-bold font-merriweather">Filter by price</h3>
      <Range
        step={1}
        min={10}
        max={41}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            key="renderTrack"
            className="h-[4px] w-100 bg-[#8BC34A] rounded-sm mt-[10px] flex"
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            key="renderThumb"
            className="h-[15px] w-[15px] rounded-full bg-[#8BC34A] flex outline-0"
            style={{
              boxShadow: "0px 2px 6px #aaa",
            }}
          />
        )}
      />
      <div className="price-values flex justify-end gap-4">
        {[values[0], values[1]].map((item, index) => (
          <div key={index} className="flex w-[60px] bg-white p-2 border border-gray-300 rounded-lg p-2">
            <span>£</span>
            <input value={item} className="w-5/6 outline-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceFilter;
