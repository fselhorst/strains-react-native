import React from 'react';
import { Text, Animated, View } from 'react-native'
import Icon from '@expo/vector-icons/Entypo'

export default class ReadMoreBlock extends React.Component {
    state = {
        readMoreBlockHeight: Animated.Value(50),
        isReadMoreBlockExpanded: false
    };

    // toggleReadMoreBlock = () => {
    //     const { isReadMoreBlockExpanded, readMoreBlockHeight } = this.state;
    //
    //     this.setState({
    //         isReadMoreBlockExpanded: !isReadMoreBlockExpanded
    //     });
    //
    //     if (isReadMoreBlockExpanded) {
    //         Animated.timing(readMoreBlockHeight, {
    //             toValue: 200,
    //             duration: 500
    //         }).start()
    //     } else {
    //         Animated.timing(readMoreBlockHeight, {
    //             toValue: 50,
    //             duration: 500
    //         }).start()
    //     }
    // };

    render() {
        // const { readMoreBlockHeight } = this.state;
        // const { text } = this.props;
        return (
            <Animated.View>
                {/*<Text>{text}</Text>*/}

                {/*<Icon style={{marginTop:30}} name="plus" size={30}/>*/}
            </Animated.View>
        )
    }
}
