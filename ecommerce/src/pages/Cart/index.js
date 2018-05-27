import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import ProductList from '../../components/ProductList/index';
import Pricing from '../../components/Pricing/index';

export default class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <View>
                <ProductList products={this.props.cartProducts} remove={true}/>
                <Pricing products={this.props.cartProducts}/>
            </View>
        )
    }
}
