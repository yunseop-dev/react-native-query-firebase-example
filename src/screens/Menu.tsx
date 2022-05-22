import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const sampleTexts = ["React", "Native", "Hello", "World"];

export default function Test() {
    const { navigate } = useNavigation()
    return (
        <View>
            <Button title='Database' onPress={() => { navigate('Database') }} />
        </View>
    );
}
