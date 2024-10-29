import React from "react";

const Counter = ({ counter, onDelete, onIncrement, onDecrement }) => {
  const formatText = () => {
    if (counter.value > 0) {
      return counter.value;
    }
    return "Zero";
  };

  const getClassName = () => {
    if (counter.value > 0) {
      return "badge bg-primary";
    } else {
      return "badge bg-warning text-dark";
    }
  };

  return (
    <>
      <div className="m-4">
        <span className={getClassName()}>{formatText()}</span>
        <button
          disabled={counter.value === 0}
          onClick={() => onDecrement(counter.id)}
          className="btn btn-primary ms-4"
        >
          -
        </button>
        <button
          onClick={() => onIncrement(counter.id)}
          className="btn btn-secondary ms-1"
        >
          +
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger ms-1"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Counter;

// export default class Counter extends Component {
//   getName() {
//     return <h1>Big Name</h1>;
//   }

//   formatText() {
//     if (this.props.counter.value > 0) {
//       return this.props.counter.value;
//     }
//     return "Zero";
//   }

//   getClassName() {
//     if (this.props.counter.value > 0) {
//       return "badge bg-primary";
//     } else {
//       return "badge bg-warning text-dark";
//     }
//   }

//   renderTags() {
//     return (
//       this.state.tags.length > 0 && (
//         <ul>
//           {this.state.tags.map((tag) => (
//             <li key={tag}>{tag}</li>
//           ))}
//         </ul>
//       )
//     );
//   }

//   render() {
//     console.log("props", this.props);
//     return (
//       <>
//         <div className="m-4">
//           <span className={this.getClassName()}>{this.formatText()}</span>
//           <button
//             disabled={this.props.counter.value == 0}
//             onClick={() => this.props.onDecrement(this.props.counter.id)}
//             className="btn btn-primary ms-4"
//           >
//             -
//           </button>
//           <button
//             onClick={() => this.props.onIncrement(this.props.counter.id)}
//             className="btn btn-secondary ms-1"
//           >
//             +
//           </button>
//           <button
//             onClick={() => this.props.onDelete(this.props.counter.id)}
//             className="btn btn-danger ms-1"
//           >
//             Delete
//           </button>
//         </div>
//       </>
//     );
//   }
// }
