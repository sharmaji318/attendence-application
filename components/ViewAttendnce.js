import * as React from 'react';
import { View, Text,StyleSheet } from "react-native";
import TakeAttendence,{dateInfo} from './TakeAttendence';
import { DataTable } from 'react-native-paper';


export default function ViewAttendenceScreen() {
   return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title numeric>Time</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>05/03/2022</DataTable.Cell>
          <DataTable.Cell numeric>13:12:45</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Bob</DataTable.Cell>
          <DataTable.Cell>05/03/2022</DataTable.Cell>
          <DataTable.Cell numeric>13:12:45</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Mei</DataTable.Cell>
          <DataTable.Cell>05/03/2022</DataTable.Cell>
          <DataTable.Cell numeric>13:12:45</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    </View>
   );
 }

 const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});