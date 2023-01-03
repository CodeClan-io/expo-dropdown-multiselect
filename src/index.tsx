import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  data: Array<any>;
  displayKey: any;
  displayValue: any;
  selectedItem: Array<any>;
  setSelectedItem: any;
  optionsContainer?: object;
  selectContainer?: object;
  itemContainer?: object;
  mainContainer?:object;
  loading?: boolean;
  checkIcon?: any;
}
export const DropdownMultiselectView = ({
  data,
  displayKey,
  displayValue,
  selectedItem,
  setSelectedItem,
  optionsContainer,
  selectContainer,
  itemContainer,
  mainContainer,
  loading = false,
  checkIcon = require('./check.png'),
}: Props) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const handleSelect = (content: any) => {
    if (displayValue) {
      const findIfExist = selectedItem.find(
        (item: any) => item === content[displayValue]
      );
      if (findIfExist) {
        const index = selectedItem.indexOf(content[displayValue]);
        const temp = [...selectedItem];

        if (index !== -1) {
          temp.splice(index, 1);
          setSelectedItem(temp);
        }
      } else {
        setSelectedItem([...selectedItem, content[displayValue]]);
      }
    } else {
      const findIfExist = selectedItem.find((item: object) => item === content);
      if (findIfExist) {
        const index = selectedItem.indexOf(content);
        const temp = [...selectedItem];

        if (index !== -1) {
          temp.splice(index, 1);
          setSelectedItem(temp);
        }
      } else {
        setSelectedItem([...selectedItem, content]);
      }
    }
  };
  return (
    <View style={[{width:"100%"},mainContainer]}>
      <TouchableOpacity
        onPress={() => (loading === false ? setIsToggle(!isToggle) : null)}
        style={[
          {
            backgroundColor: '#f4f4f4',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:"center",
            paddingHorizontal: 20,
            paddingVertical: 20,
          },
          selectContainer,
        ]}
      >
        <Text>
          {selectedItem.length > 0
            ? `Selected Item (${selectedItem.length})`
            : 'Select'}
        </Text>
        {loading ? (
          <ActivityIndicator />
        ) : isToggle ? (
          <Image
            style={{ width: 16, height: 16 }}
            source={require('./up-arrow.png')}
          />
        ) : (
          <Image
            style={{ width: 16, height: 16 }}
            source={require('./down-arrow.png')}
          />
        )}
      </TouchableOpacity>
      {isToggle ? (
        <View
          style={[
            {
              shadowColor: 'gray',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 3,
              overflow: 'hidden',
              backgroundColor: '#f4f4f4',
            },
            optionsContainer,
          ]}
        >
          <FlatList
            data={data}
            nestedScrollEnabled={true}
            renderItem={({ item, index }:any) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => handleSelect(item)}
                  style={[
                    {
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 20,
                    },
                    itemContainer,
                  ]}
                >
                  <Text>{item[displayKey]}</Text>
                  {selectedItem?.find((it: { it: object; id: any }) =>
                    displayValue
                      ? it === item[displayValue]
                      : it?.id === item?.id
                  ) ? (
                    <Image
                      style={{ width: 16, height: 16 }}
                      source={checkIcon}
                    />
                  ) : null}
                </TouchableOpacity>
                <View
                  style={{
                    borderTopWidth: 2,
                    borderTopColor: '#ebebeb',
                    marginHorizontal: 20,
                  }}
                />
              </View>
            )}
          />
        </View>
      ) : null}
    </View>
  );
};
