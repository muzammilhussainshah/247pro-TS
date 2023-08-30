import * as React from 'react';
import { ScrollView, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import the icons you want to use
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import the icons you want to use
import Entypo from 'react-native-vector-icons/Entypo'; // Import the icons you want to use
import Feather from 'react-native-vector-icons/Feather'; // Import the icons you want to use
// import Icon from '../../assets/svg-icons/briefcase.svg'; // Replace with your actual path

import Projects from '../../pages/app/projects/projects';
import Leads from '../../pages/app/leads/leads';
import MarketPlace from '../../pages/app/market-place/market-place';
import Tasks from '../../pages/app/tasks/tasks';
import Menu from '../../pages/app/menu/menu';
import Colors from '../../styles/colors';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { heightFlex1, windowHeight } from '../../styles/constant.style';
import { SvgCssUri } from 'react-native-svg';
import { Briefcase } from '../../assets/svg-icons/CustomSvgIcon';

const Tab = createBottomTabNavigator();

function AppTabs() {
    return (
        <View style={{ height: windowHeight }}>
            <Tab.Navigator
                initialRouteName="MarketPlace"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarLabelPosition: 'below-icon',
                    tabBarActiveTintColor: Colors.black, // Active tab color
                    tabBarInactiveTintColor: Colors.fontColor, // Inactive tab color
                    tabBarStyle: { height: RFPercentage(8), borderTopRightRadius: 15, borderTopLeftRadius: 15, }
                })}
            >
                <Tab.Screen
                    name="Projects"
                    component={Projects}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Briefcase width={30} height={30} color="#666666" />
                            // {/* <></> */}
                            // <SvgCssUri
                            //     width="100"
                            //     height="100"
                            //     uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/ruby.svg"
                            //     // onError={onError}
                            //     // onLoad={onLoad}
                            // />
                            // <MaterialIcons name="work" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Leads"
                    component={Leads}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="user" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="MarketPlace"
                    component={MarketPlace}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="shop" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Tasks"
                    component={Tasks}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="list" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Menu"
                    component={Menu}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="menu" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
        // {/* </ScrollView> */}
    );
}

export default AppTabs;
