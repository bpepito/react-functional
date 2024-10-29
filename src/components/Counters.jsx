import React from "react";
import Counter from "./Counter";

const Counters = ({ counters, onDelete, onIncrement, onDecrement }) => {
  console.log("counters", counters);
  return (
    <div>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Counters;

// export default class Counters extends Component {
//   render() {
//     const { counters, onDelete, onIncrement, onDecrement } = this.props;
//     console.log("counters", counters);
//     return (
//       <div>
//         {counters.map((counter) => (
//           <Counter
//             key={counter.id}
//             counter={counter}
//             onIncrement={onIncrement}
//             onDecrement={onDecrement}
//             onDelete={onDelete}
//           />
//         ))}
//       </div>
//     );
//   }
// }
