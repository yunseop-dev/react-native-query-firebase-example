import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Button } from 'react-native';

export default function Test() {
    const { navigate } = useNavigation()
    return (
        <View>
            <Button title='Database' onPress={() => { navigate('Database') }} />
            <Button title='Login' onPress={() => { navigate('Login') }} />
            <Button title='LoggedIn' onPress={() => { navigate('LoggedIn') }} />
        </View>
    );
}
