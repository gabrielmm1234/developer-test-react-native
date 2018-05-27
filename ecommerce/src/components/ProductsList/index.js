import React from 'react';
import { Card, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { styles } from '../Cart/style';
class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    keyExtractor = (item, index) => `${item.id}`;

    render() {
        return (
            <Card containerStyle={styles.containerStyle}>
                <FlatList
                    data={this.props.products}
                    extraData={this.state}
                    keyExtractor={this.keyExtractor}
                    renderItem={({item}) => 
                        <ListItem
                            key={item.id}
                            title={item.name}
                        />
                    }
                />
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