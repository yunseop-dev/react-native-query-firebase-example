import React from 'react';
import { useDatabaseSnapshot } from '../hooks/useDatabaseSnapshot';
import { useDatabaseSetMutation, useDatabaseUpdateMutation, useDatabaseTransaction, useDatabaseRemoveMutation } from '../hooks/useDatabaseMutation';
import database from '@react-native-firebase/database';
import { View, Text, Button } from 'react-native';
import _ from 'lodash';

const sampleTexts = ["React", "Native", "Hello", "World"];

export default function Test() {
    const reference = database().ref('/test');
    const setMutation = useDatabaseSetMutation(reference, {}, {
        onSuccess(data) {
            console.log(data);
        },
        onError(error) {
            console.log(error);
        }
    });

    const updateMutation = useDatabaseUpdateMutation(reference, {}, {
        onSuccess(data) {
            console.log(data);
        },
        onError(error) {
            console.log(error);
        }
    });

    const transactionMutation = useDatabaseTransaction(reference, (test) => {
        if (test) {
            test = 'transactionMutation';
        }

        return test;
    });

    const removeMutation = useDatabaseRemoveMutation(reference);

    const test = useDatabaseSnapshot(['test'], reference, { subscribe: true }, {
        onSuccess(data) {
            console.log(data);
        },
        onError(error) {
            console.log(error);
        }
    });

    return (
        <View>
            {test.isLoading && <Text>Loading</Text>}
            {test.isSuccess && <Text>{JSON.stringify(test.data?.val(), null, 2)}</Text>}
            <Button title='Set' onPress={() => { setMutation.mutate(_.sample(sampleTexts)) }} />
            <Button title='Update' onPress={() => { updateMutation.mutate({ foo: _.sample(sampleTexts.map(item => `Updated ${item}`)) }) }} />
            <Button title='Transaction' onPress={() => { transactionMutation.mutate() }} />
            <Button title='Remove' onPress={() => { removeMutation.mutate() }} />
        </View>
    );
}
