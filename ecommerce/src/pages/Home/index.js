import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import ProductList from '../../components/ProductList/index';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <View>
                <ProductList products={this.props.products}/>
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        products: state.products
    }
)
export default connect(mapStateToProps)(Home)