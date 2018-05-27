import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge } from 'react-native-elements';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './style';
export default class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    addCart = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return (
            <TouchableOpacity
                onPress={this.addCart}
            >
                <View style={styles.cartContainer}>
                    {
                        this.state.counter > 0 ?
                            <Badge
                                value={this.state.counter}
                                textStyle={styles.badgeColor}
                                containerStyle={styles.badgeBackground}
                            />
                            :
                            null
                    }
                    <Icon name='shopping-cart' color='white' size={30}/>
                </View>
            </TouchableOpacity>
        )
    }
}