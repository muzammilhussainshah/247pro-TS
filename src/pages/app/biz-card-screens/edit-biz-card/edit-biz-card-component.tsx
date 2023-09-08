// @app
import React, {
    useState
} from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import SelectDropdown from 'react-native-select-dropdown';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../../../../styles/colors';
import OutlinedTextInput from '../../../../core/components/Outlined-TextInput.component';
import Button from '../../../../core/components/button.component';
import { styles } from './edit-biz-card.style';
import { Title } from '../../../../core/components/screen-title.component';
import { platform } from '../../../../utilities';
import { centralStyle } from '../../../../styles/constant.style';
import { SOCIALINPUTSDATA } from './data';

export const AddInputSheet = ({ contactInfoInputs, addSocialAccountInput, placeHolder, btnText, title, setcontactInfoInputs, sheetRef, newField, setNewField }: any) => {
    const [selectedAccount, setselectedAccount] = useState(null)
    return (
        <View
            style={[centralStyle.XAndYCenter, centralStyle.px2, centralStyle.flex1]}>
            <Title
                color={Colors.black}
                type='Poppin-18'
                weight='600'
                title={title} />
            <View style={centralStyle.my2}>
                {!addSocialAccountInput ?
                    <OutlinedTextInput
                        onChange={(val) => setNewField(val)}
                        title={"Title"}
                        val={newField}
                        placeHolder={placeHolder}
                    />
                    :
                    <SelectDropdown
                        data={SOCIALINPUTSDATA}
                        buttonStyle={styles.dropDownBtn}
                        renderDropdownIcon={() => <AntDesign name={'down'} size={platform == 'ios' ? RFPercentage(2.5) : RFPercentage(3)} />}
                        buttonTextStyle={{ textAlign: "left" }}
                        onSelect={(selectedItem, index) => { setselectedAccount(selectedItem) }}
                        buttonTextAfterSelection={(selectedItem, index): any => {
                            return (
                                <View style={[centralStyle.row, centralStyle.flex1, centralStyle.XAndYCenter]}>
                                    <Image resizeMode='contain' source={selectedItem.icon} style={styles.socialIcon} />
                                    <Text>{selectedItem.name}</Text>
                                </View>
                            )
                        }}
                        rowTextForSelection={(item, index): any => {
                            return (
                                <View style={[centralStyle.row, centralStyle.flex1, centralStyle.XAndYCenter]}>
                                    <Image resizeMode='contain' source={item.icon} style={styles.socialIcon} />
                                    <Text>{item.name}</Text>
                                </View>
                            );
                        }}
                    />
                }
            </View>
            <View style={centralStyle.width100}>
                <Button
                    callBack={() => {
                        if (newField?.length > 0) {
                            let inputsCopy = JSON.parse(JSON.stringify(contactInfoInputs));
                            inputsCopy.push(newField)
                            setcontactInfoInputs(inputsCopy)
                            sheetRef?.current?.close()
                            setNewField('')
                        }
                        if (addSocialAccountInput) {
                            let inputsCopy = JSON.parse(JSON.stringify(contactInfoInputs));
                            inputsCopy.push(selectedAccount)
                            setcontactInfoInputs(inputsCopy)
                            sheetRef?.current?.close()
                            setselectedAccount(null)
                        }
                    }}
                    title={btnText} primary />
            </View>
        </View>
    )
}