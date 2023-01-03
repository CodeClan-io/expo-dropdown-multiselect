import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { DropdownMultiselectView } from 'expo-dropdown-multiselect';

export default function App() {
  const [selectedItem, setSelectedItem] = React.useState<any>([]);
  return (
    <View style={{ flex: 1,  justifyContent:"center", alignItems:"center", }}>
      <DropdownMultiselectView
        data={[
          { key: 1, value: 'orange' },
          { key: 2, value: 'apple' },
          { key: 3, value: 'banana' },
        ]}
        displayKey="value"
        displayValue="key"
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
