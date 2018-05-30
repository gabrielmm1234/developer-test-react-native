import React from 'react';
import { Card } from 'react-native-elements';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProductToCart, removeProductToCart } from '../../redux/actions/cartActions';
import { LABELS } from '../../settings/labels';
import { Actions } from 'react-native-router-flux';
import { styles } from './style';

class ProductCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const { item } = this.props;
        return (
            <Card title={item.name}>
                <View>
                    <Text>{this.props.quantity}: {item.quantity}</Text>
                    <Text>{this.props.price}: {item.price}</Text>
                    <Text>{this.props.description}: {item.description}</Text>
                    <View style={styles.buttons}>
                        <Button 
                            title={this.props.addButton}
                            onPress={() => this.props.addProductToCart(item)}
                        />
                        {
                            this.props.remove ?
                                <Button
                                    color='red'
                                    title={this.props.removeButton}
                                    onPress={() => this.props.removeProductToCart(item)}
                                />
                            :
                            null
                        }
                    </View>
                </View>
            </Card>
        )
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({ 
        addProductToCart,
        removeProductToCart
    }, dispatch)
)

ProductCard.defaultProps = {
    quantity: 'Quantidade em estoque',
    price: 'Preço',
    description: 'Descrição',
    addButton: 'adicionar ao carrinho',
    removeButton: 'remover do carrinho',
}

export default connect(null, mapDispatchToProps)(ProductCard);