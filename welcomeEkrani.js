import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {useStateValue} from '../stateProvider';

const welcomeEkrani = ({navigation}) => {
  const [{}, dispatch] = useStateValue();
  const [Name, setName] = useState('');
  return (
    <View style={styles.welcomeEkrani}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <Text style={styles.welcomeYazisi}>Emoquiz'e Hoşgeldiniz</Text>
      <Text style={styles.welcomeYazisi}>İlerlemek için isminizi giriniz.</Text>
      <TextInput
        style={styles.inputBox}
        value={Name}
        onChangeText={setName}
        placeholder="İsminizi giriniz."
        placeholderTextColor="black"
      />
      <Button
        icon={<Icon name="arrow-circle-right" size={70} color="blue" />}
        type="clear"
        onPress={() => {
          if (Name === '') {
            ToastAndroid.show(
              'İlerlemek için isminizi giriniz.',
              ToastAndroid.CENTER,
            );
          } else {
            dispatch({
              type: 'SET_USER',
              user: Name,
            });
            navigation.navigate('soruEkrani');
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeYazisi: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
  welcomeYazisi: {
    fontSize: 25,
    marginTop: 15,
    textAlign: 'center',
  },
  inputBox: {
    width: '85%',
    height: 40,
    margin: 12,
    borderBottomWidth: 3,
    borderBottomColor: '#3700B3',
    marginTop: 60,
    color: 'black',
  },
});
export default welcomeEkrani;
