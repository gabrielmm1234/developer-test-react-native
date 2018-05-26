import React from 'react';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Card containerStyle={{padding: 0}} >
                {
                    this.props.products.map((product, index) => {
                        return (
                        <ListItem
                            key={index}
                            roundAvatar
                            title={product.name}
                        />
                        );
                    })
                }
            </Card>
        )
    }
}

const mapStateToProps = state => (
    {
        products: state.products
    }
)
export default connect(mapStateToProps)(ProductList)