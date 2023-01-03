# Expo Dropdown MultiSelect

A multiselect is a UI component that allows the user to select multiple options from a list of choices. In the context of Expo React Native, a multiselect component can be used to allow the user to select multiple items from a list of options.

## How to use

- You can now import `expo-dropdown-multiselect` as a normal package installed from npm like so:

```JSX
import { DropdownMultiselectView } from 'expo-dropdown-multiselect';
...
```

## Available props

```

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

```

Example Usage

```JSX
import { DropdownMultiselectView } from 'expo-dropdown-multiselect';
<View style={{flex:1}}>
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
```

## ✍️ Authors

- [Saad Anwar](https://github.com/5aad)

## 👍 Contribute

If you want to say **thank you** and/or support the active development of `expo-dropdown-multiselect`:

1. Add a [GitHub Star](https://github.com/CodeClan-io/expo-dropdown-multiselect/stargazers) to the project.
2. Write a review or tutorial on [Medium](https://medium.com/), [Dev.to](https://dev.to/) or personal blog.
3. Support the project by donating a [cup of coffee](https://www.buymeacoffee.com/saadfarhan7223).
