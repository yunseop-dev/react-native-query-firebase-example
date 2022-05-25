import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuthUser } from '../hooks/useAuthQuery';
import { useAuthCreateUserWithEmailAndPassword, useAuthSignInWithEmailAndPassword, useAuthSignOut } from '../hooks/useAuthMutation';
import { useQueryClient } from 'react-query';
import auth from '@react-native-firebase/auth';

export default function Login() {
    const client = useQueryClient();
    const createAccount = useAuthCreateUserWithEmailAndPassword({
        onSuccess(data) {
            // console.log(data);
        },
        onError(err) {
            // console.error(err);
        }
    });

    const login = useAuthSignInWithEmailAndPassword({
        onSuccess(data) {
            // console.log(data);
        },
        onError(err) {
            // console.error(err);
        }
    })

    const logout = useAuthSignOut({
        onSuccess(data) {
            // console.log(data);
            client.setQueryData(['user'], () => null);
        },
        onError(err) {
            // console.error(err);
        }
    });

    const user = useAuthUser(['user'], auth(), {
        onSuccess(data) {
            // console.log('aaa', data);
        },
        onError(err) {
            // console.error(err);
        }
    });

    return (
        <View>
            <Text>Login</Text>
            <Text>{JSON.stringify({
                dataUpdatedAt: user.dataUpdatedAt,
                status: user.status,
                data: user.data?.email,
            }, null, 2)}</Text>
            <Button title="CreateAccount" onPress={() => createAccount.mutate({ email: 'kim8560@naver.com', password: 'kim8560@naver.com' })} />
            <Button title="Login" onPress={() => {
                console.log('======');
                login.mutate({ email: 'kim8560@naver.com', password: 'kim8560@naver.com' });
            }} />
            <Button title="Logout" onPress={() => logout.mutate()} />
        </View>
    );
}
