import React from 'react';
import { Card } from 'react-native-elements';
import { View, Text, Button } from 'react-native';

export default class ProductCard extends React.Component {
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
                    <Button 
                        title={this.props.labelButton}
                        onPress={() => alert('adicionado ao carrinho')}
                    />
                </View>
            </Card>
        )
    }
}

ProductCard.defaultProps = {
    quantity: 'Quantidade',
    price: 'Preço',
    description: 'Descrição',
    labelButton: 'adicionar ao carrinho'
}