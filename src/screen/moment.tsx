import React from 'react';
import {View, Text, Button} from 'react-native';
import {useMutation, useQueryClient} from 'react-query';

const updateDataApi = async (newData: any) => {
  try {
    // Simulate an API call to update data
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({newData}),
    });
    if (!response.ok) {
      throw new Error('Failed to update data');
    }
    const updatedData = await response.json();
    return updatedData;
  } catch (error: any) {
    throw new Error('Error updating data: ' + error.message);
  }
};

const ExampleMutationComponent = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async newData => {
      // Your mutation logic here
      const updatedData = await updateDataApi(newData);
      return updatedData;
    },
    {
      onSuccess: () => {
        // Invalidate and refetch queries after a successful mutation
        queryClient.invalidateQueries('exampleQueryKey');
      },
    },
  );

  const newData: any = [
    {id: 1, name: 'john'},
    {id: 2, name: 'john1'},
    {id: 3, name: 'joh4'},
    {id: 4, name: 'john5'},
  ];

  const newData2: any = [
    {id: 1, name: 'What the hell is going on'},
    {id: 2, name: 'wherew is john 1'},
    {id: 3, name: 'whey protein'},
    {id: 4, name: 'john wick 5'},
  ];

  return (
    <View style={{height: 100, width: 100, alignItems: 'center'}}>
      <Button onPress={() => mutation.mutate(newData)} title="update data" />
      <Button
        onPress={() => mutation.mutate(newData2)}
        title="AGAIN update data"
      />
      <Text>Hi</Text>
      <View style={{height: 200, borderWidth: 1, width: 100}}>
        <Text>{JSON.stringify(mutation?.data?.newData)}</Text>
      </View>
    </View>
  );
};

export default ExampleMutationComponent;
