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
        return (
            <Card title="PS4">
                <View>
                    <Text>{this.props.quantity}: 5</Text>
                    <Text>{this.props.price}: 5</Text>
                    <Text>{this.props.description}: Um video game foda</Text>
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