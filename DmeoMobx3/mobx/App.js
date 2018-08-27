import React from "react";
import { observer } from "mobx-react";
import { View, Text, Button } from "react-native";
import AppState from './AppState'



@observer
class App extends React.Component {
    render() {
        return (
            <View>
                <Text>hgg</Text>
                <Text>当前的数是：{AppState.timer}</Text>
                <Button onPress={() => AppState.addTimers()} title='add' />
                <Button onPress={() => AppState.resetTimer()} title='reset' />
            </View>
        );
    }
}
export default App;


