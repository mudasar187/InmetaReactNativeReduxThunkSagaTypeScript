import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

const TodoDetail: React.FC<any> = props => {
  const { obj } = props.route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{`Title: ${obj.title}`}</Text>
      <Text style={styles.descriptionText}>
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
  titleText: {
    fontSize: 30,
  },
  descriptionText: {
    fontSize: 20,
  },
});
