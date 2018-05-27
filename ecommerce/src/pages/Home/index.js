import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { LABELS } from '../../settings/labels';
import { styles } from './style';
import ProductList from '../../components/ProductList/index';
import Cart from '../../components/Cart/index';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <View>
                <Header
                    centerComponent={
                        { 
                            text: LABELS.Header.title,
                            style: {
                                color: '#fff'
                            }
                        }
                    }
                    rightComponent={
                        <Cart />
                    }
                />
                <ProductList />
            </View>
        )
    }
}
