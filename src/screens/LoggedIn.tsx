import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuthUser } from '../hooks/useAuthQuery';
import auth from '@react-native-firebase/auth';

export default function LoggedIn() {
    const user = useAuthUser(['user'], auth(), {
        onSuccess(data) {
            console.log('loggedin', data);
        },
        onError(err) {
            console.error(err);
        }
    });

    return (
        <View>
            <Text>LoggedIn</Text>
            <Text>{JSON.stringify({
                dataUpdatedAt: user.dataUpdatedAt,
                status: user.status,
                data: user.data?.email,
            }, null, 2)}</Text>
        </View>
    );
}
