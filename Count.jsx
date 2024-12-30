// import { useState } from "react";

// function Count() {

//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>+</button>
//             <button onClick={() => setCount(count - 1)}>-</button>
//         </div>
//     );
// }

// export default Count;


import { useState } from "react";

function Count(Props) {
    const [num1, setName] = useState(100);
    let a=parseInt(Props.num)+parseInt(Props.num1)
    return (
        <>
        <input
            type="text"
            value={num1}
            onChange={(e) => setName(parseInt(e.target.value))}
        />
        <h1>{a+num1}</h1>
        </>
       
    );
}

export default Count;

