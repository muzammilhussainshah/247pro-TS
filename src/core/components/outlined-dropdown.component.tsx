import React, {
  useState
} from 'react';
import {
  View,
  Text,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown'
import { RFPercentage } from 'react-native-responsive-fontsize';


import { styles } from './index.style';
import Colors from '../../styles/colors';
import { platform } from '../../utilities';

interface OutlinedDropDownProps {
  title?: string;
  color?: string;
  height?: number;
  iconsSize?: number;
  DATA: string[]; // Assuming DATA is an array of strings
  drop_down_button_style?: any; // Assuming DATA is an array of strings
  onselect?: any; // onselect event handler
  fontSize?: any; // onselect event handler
  dropDownStyle?: any; // onselect event handler
  defaultValueByIndex?: any; // onselect event handler
}

const OutlinedDropDown: React.FC<OutlinedDropDownProps> = ({ title, height, defaultValueByIndex, dropDownStyle, color, DATA, onselect, fontSize, iconsSize, drop_down_button_style }) => {
  const [isActive, setIsActive] = useState(false);
  const [dropdownVal, setdropdownVal] = useState('')

  return (
    <View style={styles.inputContainer(height)}>
      {dropdownVal?.length && dropdownVal?.length > 0 ?
        <Text style={styles.inputtitle(isActive)}>{title}</Text>
        : isActive &&
        <Text style={styles.inputtitle(isActive)}>{title}</Text>
      }
      <View style={styles.textInputContainer(isActive)}>
        <SelectDropdown
          data={DATA}
          defaultValueByIndex={defaultValueByIndex ? defaultValueByIndex : null}
          defaultButtonText={title}
          onSelect={(selectedItem: string) => {
            setdropdownVal(selectedItem)
            onselect(selectedItem)
          }}
          buttonTextAfterSelection={(selectedItem, index) => selectedItem}
          rowTextForSelection={(item, index) => item}
          onBlur={() => setIsActive(false)}
          onFocus={() => setIsActive(true)}
          renderDropdownIcon={() => <AntDesign
            name={'down'}
            color={Colors.fontColor}
            size={iconsSize ? iconsSize : platform == 'ios' ? RFPercentage(1.5) : RFPercentage(2)} />}
          buttonStyle={drop_down_button_style}
          buttonTextStyle={{
            textAlign: "left", color:
              defaultValueByIndex == true ? Colors.black :
                dropdownVal?.length && dropdownVal?.length > 0 ? Colors.black : color ? color : Colors.black,
            fontSize: fontSize ? fontSize : RFPercentage(2)
          }}
          dropdownStyle={dropDownStyle ? dropDownStyle : styles.dropDownStyle}
        />
      </View>
    </View>
  );
};

export default OutlinedDropDown;
