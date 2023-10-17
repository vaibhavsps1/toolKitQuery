import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useQuery} from 'react-query';
import {fetchMovies} from '../function';

const ExampleComponent = () => {
  const fetchDataFunction = async () => {
    try {
      // Perform your data fetching here, e.g., make an API call
      // const response = await fetch(
      //   'https://jsonplaceholder.typicode.com/posts/1/comments',
      // );
      // const data = await response.json();
      const data = await fetchMovies();
      console.log(JSON.stringify(data), 'this is 33data');
      return data;
    } catch (error) {
      throw new Error('Error fetching data');
    }
  };

  // Use of useQuery hook
  const {data, isLoading, error}: any = useQuery(
    'exampleQueryKey',
    fetchDataFunction,
  );
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;
  return (
    <View>
      <FlatList
        scrollEnabled={true}
        data={data}
        renderItem={(item: any) => {
          return (
            <View
              style={{
                backgroundColor: '#999',
                padding: 10,
                height: 70,
                width: '70%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                marginVertical: 10,
                left: 20,
              }}>
              <Text>{item.item.title}</Text>
              <Text>Year: {item.item.year}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ExampleComponent;
