import React from 'react';
import { ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { styles } from './style';

export default class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    keyExtractor = (item, index) => `${item.id}`;

    render() {
        return (
            <ScrollView>
                <Card containerStyle={styles.container}>
                    <FlatList
                        data={this.props.products}
                        extraData={this.state}
                        keyExtractor={this.keyExtractor}
                        renderItem={({item}) => 
                            <ListItem
                                key={item.id}
                                title={item.name}
                                onPress={() => Actions.product({item, remove:this.props.remove})}
                            />
                        }
                    />
                </Card>
            </ScrollView>
        )
    }
}