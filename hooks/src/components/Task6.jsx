import React, { useState } from 'react';
import { ComponentA } from "./ComponentA";

export const Task6 = ( ) => {
    const [displayA, setDisplayA] = useState("");
    
    const handleDisplay = () => {
        setDisplayA((state) => (state === "A" ? "C" : "A"));
        setShowC((state) => (state === "C" ? "A" : "C"));
    }

    const [showC, setShowC] = useState("");

    const handleCDisplay = () => {
        setShowC((state) => (state === "A" ? "A" : "C"));
    }
    return (
        <>
        <div>
        <button onClick={handleDisplay}>Show letter A</button>
            <ComponentA letterA={displayA} handleCDisplay={handleCDisplay} showC={showC}/>
        </div>
        </>
    )
}