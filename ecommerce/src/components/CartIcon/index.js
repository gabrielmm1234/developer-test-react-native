import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge } from 'react-native-elements';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class CartIcon extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => Actions.cart({cartProducts: this.props.cart.products}) }
            >
                <View style={styles.cartContainer}>
                    {
                        this.props.cart.products.length > 0 ?
                            <Badge
                                value={this.props.cart.products.length}
                                textStyle={styles.badgeColor}
                                containerStyle={styles.badgeBackground}
                            />
                            :
                            null
                    }
                    <Icon name='shopping-cart' color={styles.icon.color} size={30}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const mapStateToProps = state => (
    {
        cart: state.cart
    }
) 

export default connect(mapStateToProps)(CartIcon);