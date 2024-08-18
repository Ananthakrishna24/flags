import React from "react";

function Flags({ name, flag }) {
    return (
        <div className="countryCard flex flex-col items-center p-2 border rounded-lg shadow-md w-40">
            <img src={flag} alt={`${name} flag`} className="w-24 h-16 object-cover mb-2" />
            <p className="text-center text-sm font-semibold">{name}</p>
        </div>
    );
}

export default Flags;