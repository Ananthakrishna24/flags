// eslint-disable-next-line no-unused-vars
import React from "react";

// Props: name, flag (Link of Image), abbr  
// eslint-disable-next-line react/prop-types
function Flags({ name, flag }) {
    return (
        <div className="flex flex-col items-center p-2 border rounded-lg shadow-md w-40">
            <img src={flag} alt={`${name} flag`} className="w-24 h-16 object-cover mb-2" />
            <p className="text-center text-sm font-semibold">{name}</p>
        </div>
    );
}

export default Flags;