import React from "react";

const Controls = ({onIncrementGood, onIncrementNeutral, onIncrementBad}) => (
<div className="review_controls">
        <button type="button" onClick={onIncrementGood}>
        Good</button>
        <button type="button" onClick={onIncrementNeutral}>
        Neutral</button>
        <button type="button" onClick={onIncrementBad}>
        Bad</button>
</div>
);

export default Controls;