import React from 'react';
import { View, Button } from 'react-native';
import ProductList from '../../components/ProductList/index';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <View>
                <ProductList />
            </View>
        )
    }
}
