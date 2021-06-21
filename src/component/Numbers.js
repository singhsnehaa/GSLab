import React from 'react';

import {TouchableOpacity, Text, View} from 'react-native';
const Number = React.memo(({number, odd, even, isSelected, setIsSelected}) => {
  return (
    <TouchableOpacity
      onPress={() => setIsSelected(number)}
      style={{
        flex: 1,
        alignItems: even ? 'center' : 'flex-start',
      }}>
      <Text style={{fontWeight: isSelected == number ? '700' : '400'}}>
        {number}
      </Text>
    </TouchableOpacity>
  );
});

const Numbers = ({numbers, odd, even, isSelected, setIsSelected}) => {
  return (
    <View
      style={{
        marginTop: 30,
        flexDirection: 'row',
        marginLeft: 60,
        marginRight: 30,
      }}>
      {numbers.map((number, index) => (
        <Number
          id={index}
          number={number}
          odd={odd}
          even={even}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      ))}
    </View>
  );
};

export default React.memo(Numbers);
