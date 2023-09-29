/* eslint-disable no-undef */

// import "./calc.css";

// function Calc() {
//   let input1 = document.getElementById("input1");
//   let input2 = document.getElementById("input2");

//   let eq = document.getElementById("eq");
//   let ac = document.getElementById("ac");

//   function handleClick(e) {
//     let num = e;
//     input2.value += num;
//   }

//   function Delete() {
//     input2.value = input2.value.slice(0, -1);
//   }

//   let Sign = (e) => {
//     let operation = e;
//     input2.value += operation;
//     let num1 = input2.value.slice(0, -1);
//     input2.value = 0;
//     Delete();
//     input1.value = num1;

//     eq.onclick = function Equal() {
//       let num2 = input2.value;
//       let intNum1 = parseFloat(num1);
//       let intNum2 = parseFloat(num2);
//       let result = eval(`${intNum1} ${operation} ${intNum2}`);
//       input2.value = result;
//       input1.value = 0;

//       ac.onclick = function Ac() {
//         input1.value = 0;
//         input2.value = 0;
//         num1 = 0;
//         num2 = 0;
//         Delete();
//       };
//     };
//   };


//   return (
//     <div className="parent">
//       <div className="calc">
//         <div className="header">
//           <input id="input1" placeholder="0"></input>
//           <input id="input2" placeholder="0"></input>
//         </div>
//         <div className="body">
//           <div className="row1 row">
//             {/* <div className="child1 child ac" id="ac"  onClick={() => Ac()}> */}
//             <div className="child1 child ac" id="ac">
//               AC
//             </div>
//             <div className="child2 child del" id="del" onClick={() => Delete()}>
//               DEL
//             </div>
//             <div className="child3 child sign div" onClick={() => Sign("/")}>
//               /
//             </div>
//           </div>
//           <div className="row2 row">
//             <div
//               className="child1 child"
//               id="num"
//               onClick={() => handleClick("1")}
//             >
//               1
//             </div>
//             <div
//               className="child2 child "
//               id="num"
//               onClick={() => handleClick("2")}
//             >
//               2
//             </div>
//             <div
//               className="child3 child"
//               id="num"
//               onClick={() => handleClick("3")}
//             >
//               3
//             </div>
//             <div
//               className="child4 child sign multi"
//               id="sign"
//               onClick={() => Sign("*")}
//             >
//               *
//             </div>
//           </div>
//           <div className="row3 row">
//             <div
//               className="child1 child"
//               id="num"
//               onClick={() => handleClick("4")}
//             >
//               4
//             </div>
//             <div
//               className="child2 child"
//               id="num"
//               onClick={() => handleClick("5")}
//             >
//               5
//             </div>
//             <div
//               className="child3 child"
//               id="num"
//               onClick={() => handleClick("6")}
//             >
//               6
//             </div>
//             <div className="child4 child sign add" onClick={() => Sign("+")}>
//               +
//             </div>
//           </div>
//           <div className="row4 row">
//             <div
//               className="child1 child"
//               id="num"
//               onClick={() => handleClick("7")}
//             >
//               7
//             </div>
//             <div
//               className="child2 child"
//               id="num"
//               onClick={() => handleClick("8")}
//             >
//               8
//             </div>
//             <div
//               className="child3 child"
//               id="num"
//               onClick={() => handleClick("9")}
//             >
//               9
//             </div>
//             <div className="child4 child sign min" onClick={() => Sign("-")}>
//               -
//             </div>
//           </div>
//           <div className="row5 row">
//             <div className="child1 child" onClick={() => handleClick(".")}>
//               .
//             </div>
//             <div
//               className="child2 child"
//               id="num"
//               onClick={() => handleClick("0")}
//             >
//               0
//             </div>
//             <div className="child3 child equal" id="eq">
//               =
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calc;

// ------------------------------------------

// import React, { useState } from "react";
// import "./calc.css";

// function Calc() {
//   const [input1, setInput1] = useState("");
//   const [input2, setInput2] = useState("");

//   const handleClick = (num) => {
//     setInput2(input2 + num);
//   };

//   const handleDelete = () => {
//     setInput2(input2.slice(0, -1));
//   };

//   const handleClear = () => {
//     setInput1("");
//     setInput2("");
//   };

//   const handleEqual = () => {
//     const num1 = parseFloat(input1);
//     const num2 = parseFloat(input2);
//     let result;

//     if (isNaN(num1) || isNaN(num2)) {
//       result = "Invalid input";
//     } else {
//       switch (operation) {
//         case "+":
//           result = num1 + num2;
//           break;
//         case "-":
//           result = num1 - num2;
//           break;
//         case "*":
//           result = num1 * num2;
//           break;
//         case "/":
//           result = num1 / num2;
//           break;
//         default:
//           result = "Invalid operation";
//       }
//     }

//     setInput1("");
//     setInput2(result.toString());
//   };

//   const handleOperation = (operation) => {
//     setInput2(input2 + operation);
//     setInput1(input2);
//     setInput2("");
//   };

//   return (
//     <div className="parent">
//       <div className="calc">
//         <div className="header">
//           <input id="input1" placeholder="0" value={input1} readOnly />
//           <input id="input2" placeholder="0" value={input2} readOnly />
//         </div>
//         <div className="body">
//           <div className="row1 row">
//             <div className="child1 child ac" onClick={handleClear}>
//               AC
//             </div>
//             <div className="child2 child del" onClick={handleDelete}>
//               DEL
//             </div>
//             <div className="child3 child sign div" onClick={() => handleOperation("/")}>
//               /
//             </div>
//           </div>
//           <div className="row2 row">
//             <div className="child1 child" onClick={() => handleClick("1")}>
//               1
//             </div>
//             <div className="child2 child" onClick={() => handleClick("2")}>
//               2
//             </div>
//             <div className="child3 child" onClick={() => handleClick("3")}>
//               3
//             </div>
//             <div className="child4 child sign multi" onClick={() => handleOperation("*")}>
//               *
//             </div>
//           </div>
//           <div className="row3 row">
//             <div className="child1 child" onClick={() => handleClick("4")}>
//               4
//             </div>
//             <div className="child2 child" onClick={() => handleClick("5")}>
//               5
//             </div>
//             <div className="child3 child" onClick={() => handleClick("6")}>
//               6
//             </div>
//             <div className="child4 child sign add" onClick={() => handleOperation("+")}>
//               +
//             </div>
//           </div>
//           <div className="row4 row">
//             <div className="child1 child" onClick={() => handleClick("7")}>
//               7
//             </div>
//             <div className="child2 child" onClick={() => handleClick("8")}>
//               8
//             </div>
//             <div className="child3 child" onClick={() => handleClick("9")}>
//               9
//             </div>
//             <div className="child4 child sign min" onClick={() => handleOperation("-")}>
//               -
//             </div>
//           </div>
//           <div className="row5 row">
//             <div className="child1 child" onClick={() => handleClick(".")}>
//               .
//             </div>
//             <div className="child2 child" onClick={() => handleClick("0")}>
//               0
//             </div>
//             <div className="child3 child equal" onClick={handleEqual}>
//               =
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calc;

// ---------------------------------------
import React, { useState } from "react";
import "./calc.css";

function Calc() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [operation, setOperation] = useState("");

  const handleClick = (num) => {
    setInput2(input2 + num);
  };

  const handleDelete = () => {
    setInput2(input2.slice(0, -1));
  };

  const handleClear = () => {
    setInput1("");
    setInput2("");
    setOperation("");
  };

  const handleEqual = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
      result = "Invalid input";
    } else {
      switch (operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          result = "Invalid operation";
      }
    }

    setInput1("");
    setInput2(result.toString());
    setOperation("");
  };

  const handleOperation = (op) => {
    setInput2(input2 + op);
    setInput1(input2);
    setInput2("");
    setOperation(op);
  };

  return (
    <div className="parent">
      <div className="calc">
        <div className="header">
          <input id="input1" placeholder="0" value={input1} readOnly />
          <input id="input2" placeholder="0" value={input2} readOnly />
        </div>
        <div className="body">
          <div className="row1 row">
            <div className="child1 child ac" onClick={handleClear}>
              AC
            </div>
            <div className="child2 child del" onClick={handleDelete}>
              DEL
            </div>
            <div className="child3 child sign div" onClick={() => handleOperation("/")}>
              /
            </div>
          </div>
          <div className="row2 row">
            <div className="child1 child" onClick={() => handleClick("1")}>
              1
            </div>
            <div className="child2 child" onClick={() => handleClick("2")}>
              2
            </div>
            <div className="child3 child" onClick={() => handleClick("3")}>
              3
            </div>
            <div className="child4 child sign multi" onClick={() => handleOperation("*")}>
              *
            </div>
          </div>
          <div className="row3 row">
            <div className="child1 child" onClick={() => handleClick("4")}>
              4
            </div>
            <div className="child2 child" onClick={() => handleClick("5")}>
              5
            </div>
            <div className="child3 child" onClick={() => handleClick("6")}>
              6
            </div>
            <div className="child4 child sign add" onClick={() => handleOperation("+")}>
              +
            </div>
          </div>
          <div className="row4 row">
            <div className="child1 child" onClick={() => handleClick("7")}>
              7
            </div>
            <div className="child2 child" onClick={() => handleClick("8")}>
              8
            </div>
            <div className="child3 child" onClick={() => handleClick("9")}>
              9
            </div>
            <div className="child4 child sign min" onClick={() => handleOperation("-")}>
              -
            </div>
          </div>
          <div className="row5 row">
            <div className="child1 child" onClick={() => handleClick(".")}>
              .
            </div>
            <div className="child2 child" onClick={() => handleClick("0")}>
              0
            </div>
            <div className="child3 child equal" onClick={handleEqual}>
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;