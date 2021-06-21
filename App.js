import React, {useCallback, useState} from 'react';
import Numbers from './src/component/Numbers';

const App = () => {
  const [isSelected, setIsSelected] = useState(null);
  const _setIsSelected = useCallback(setIsSelected, [isSelected]);
  return (
    <>
      <Numbers
        numbers={[1, 2, 3, 4, 5]}
        odd
        isSelected={isSelected}
        setIsSelected={_setIsSelected}
      />
      <Numbers
        numbers={[5, 6, 7, 8, ' ']}
        even
        isSelected={isSelected}
        setIsSelected={_setIsSelected}
      />

      <Numbers
        numbers={[9, 10, 11, 12, 13]}
        odd
        isSelected={isSelected}
        setIsSelected={_setIsSelected}
      />

      <Numbers
        numbers={[14, 15, 16, 17, ' ']}
        even
        isSelected={isSelected}
        setIsSelected={_setIsSelected}
      />

      <Numbers
        numbers={[18, 19, 20, 21, 22]}
        odd
        isSelected={isSelected}
        setIsSelected={_setIsSelected}
      />

      <Numbers
        numbers={[23, 24, 25, 26, ' ']}
        even
        isSelected={isSelected}
        setIsSelected={_setIsSelected}
      />

      <Numbers
        numbers={[27, 28, 29, 30, 31]}
        odd
        isSelected={isSelected}
        setIsSelected={_setIsSelected}
      />

      <Numbers
        numbers={[32, 33, 34, 35, '']}
        even
        isSelected={isSelected}
        setIsSelected={_setIsSelected}
      />

      <Numbers
        numbers={[36, 37, 38, 39, 49]}
        odd
        isSelected={isSelected}
        setIsSelected={_setIsSelected}
      />
    </>
  );
};

export default App;
