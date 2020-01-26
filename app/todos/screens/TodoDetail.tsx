import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const TodoDetail: React.FC<any> = props => {
  const { obj } = props.route.params;
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
        }}>
        {`Title: ${obj.title}`}
      </Text>
      <Text
        style={{
          fontSize: 20,
        }}>
        {`Description: ${obj.description}`}
      </Text>
    </View>
  );
};

export default TodoDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});
