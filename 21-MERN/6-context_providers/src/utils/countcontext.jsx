import { createContext, useContext, useState } from 'react';

// Initialize new context for students
const CountContext = createContext();

// We create a custom hook to provide immediate usage of the student context value (students) in other components
export const useCountContext = () => useContext(CountContext);

// The provider is responsible for holding our state, updating the state, and persisting values to the children
export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(count + 1);
      }

  // The value prop expects an initial state object
  return (
    <CountContext.Provider
      value={{ count, handleCount }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </CountContext.Provider>
  );
};
