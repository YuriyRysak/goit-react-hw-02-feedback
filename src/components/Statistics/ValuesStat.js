import React from "react";

const ValuesStat = ({good, neutral, bad, total, positive }) =>

<ul>
<li>Good:<span>{good}</span></li>
<li>Neutral:<span>{neutral}</span></li>
<li>Bad:<span>{bad}</span></li>
<li>Total:<span>{total}</span></li>
<li>Positive feedback:<span>{positive}%</span></li>


</ul>

export default ValuesStat;