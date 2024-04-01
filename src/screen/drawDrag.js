import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const DrawDrag = () => {
  const [quizRes, setQuizRes] = useState(null);
  const handleFormSubmit = responseData => {
    console.log('Form submitted with data:', JSON.stringify(responseData));
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

 
  const Resp1 = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.typeform.com/forms/oWdXojRu/responses',
      headers: {
        authorization:
          'bearer tfp_4gv7kRUiQouz6LASgMJktAa6M6bSSEJ5qhhubA55gcSw_3mQ2qwo3RaM7ap',
      },
    };
    axios
      .request(config)
      .then(response => {
        setQuizRes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

    getDataWithAuthorization(apiUrl, accessToken)
      .then(responseData => {
        setQuizRes(responseData);
      })
      .catch(error => {
        // Handle errors
        console.log(error);
      });

    return (
      <View>
        <Text>{JSON.stringify(quizRes)}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>Hi</Text>
      <View style={{borderWidth: 2, height: 500}}>
        <TypeformEmbed
          style={{flex: 1}}
          url="https://kst5crcfuzz.typeform.com/to/oWdXojRu"
          onSubmit={() => handleFormSubmit()}
          onClose={() => console.log('this form is closed')}
        />
      </View>
      <Button title="click me" onPress={() => Resp1()} />
      <ScrollView style={{flex: 1, borderWidth: 2}}>
        <Text>{JSON.stringify(quizRes)}</Text>
        <Text>Hi</Text>
      </ScrollView>
      <View style={{width: '50%', paddingVertical: 40, padding: 30}}>
        <Button title="Show Date Picker" onPress={() => showDatePicker()} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </View>
  );
};

export default DrawDrag;

const styles = StyleSheet.create({});
