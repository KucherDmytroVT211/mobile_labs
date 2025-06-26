import 'react-native-gesture-handler';
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import GalleryScreen from './screens/GalleryScreen';
import RegistrationScreen from './screens/RegistrationScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>FirstMobileApp</Text>
      </View>

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarIndicatorStyle: { backgroundColor: '#f0f0f0' },
            tabBarStyle: styles.tabBar,
          }}
        >
          <Tab.Screen
            name="Головна"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <MaterialIcons
                  name="home"
                  size={24} // Зменшено з 36
                  color={focused ? '#2196F3' : '#666'}
                  style={styles.icon}
                />
              ),
              tabBarLabel: ({ focused }) => (
                <Text style={[
                  styles.label,
                  focused && styles.activeLabel
                ]}>
                  Головна
                </Text>
              ),
            }}
          />

          <Tab.Screen
            name="Фотогалерея"
            component={GalleryScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <FontAwesome
                  name="picture-o"
                  size={20} // Зменшено з 32
                  color={focused ? '#2196F3' : '#666'}
                  style={styles.icon}
                />
              ),
              tabBarLabel: ({ focused }) => (
                <Text style={[
                  styles.label,
                  focused && styles.activeLabel
                ]}>
                  Фотогалерея
                </Text>
              ),
            }}
          />

          <Tab.Screen
            name="Профіль"
            component={RegistrationScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <MaterialIcons
                  name="person"
                  size={24} // Зменшено з 36
                  color={focused ? '#2196F3' : '#666'}
                  style={styles.icon}
                />
              ),
              tabBarLabel: ({ focused }) => (
                <Text style={[
                  styles.label,
                  focused && styles.activeLabel
                ]}>
                  Профіль
                </Text>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  logo: {
    width: 140,
    height: 40,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 'auto',
  },
  tabBar: {
    backgroundColor: '#f0f0f0',
    elevation: 0,
    shadowOpacity: 0,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    color: '#666',
    marginTop: -4,
  },
  activeLabel: {
    color: '#2196F3',
  },
  icon: {
    marginBottom: 4,
  },
});