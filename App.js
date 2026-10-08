import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';

export default function App() {
  const [points, setPoints] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile Content */}
      <View style={styles.content}>
        {/* Profile Image */}
        <View style={styles.profileWrapper}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            }}
            style={styles.profileImage}
          />
          {/* Green Check Mark */}
          <View style={styles.checkWrapper}>
            <Text style={styles.checkMark}>✓</Text>
          </View>
        </View>

        {/* Horizontal Line */}
        <View style={styles.horizontalLine} />

        {/* Name */}
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Abishek</Text>
        </View>

        {/* Email */}
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.row}>
            <Text style={styles.emailIcon}>✉</Text>
            <Text style={styles.value}>abishek.w@nsbm.ac.lk</Text>
          </View>
        </View>

        {/* Points */}
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Points</Text>
          <View style={styles.row}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.value}>{points}</Text>
          </View>
        </View>
      </View>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setPoints(points + 1)}
        activeOpacity={0.7}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    height: 60,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 20,
  },
  profileWrapper: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  checkWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  checkMark: {
    color: '#00E600',
    fontSize: 32,
    fontWeight: 'bold',
  },
  horizontalLine: {
    height: 2,
    backgroundColor: '#222222',
    width: '100%',
    marginBottom: 14,
  },
  infoContainer: {
    marginBottom: 22,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 7,
  },
  value: {
    fontSize: 14,
    color: '#333333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailIcon: {
    fontSize: 18,
    color: '#000000',
    marginRight: 8,
  },
  star: {
    fontSize: 18,
    color: '#000000',
    marginRight: 10,
  },
  addButton: {
    position: 'absolute',
    right: 18,
    bottom: 20,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  plus: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '300',
  },
});