export const initialState = { count: 0 };

let a ;
export function reducer(state, action) {
  switch (action.type) {
    case "increment":
        a={ count: state.count + 1 }
      return a;
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: initialState.count };
    case "same":
        //? 返回同一个state,仍会触发一次渲染，但此后就不会了
        console.log('same',a===state);
      return state;
    default:
      throw new Error();
  }
}
