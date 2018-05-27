import React from 'react';
import { View, Text, Alert } from 'react-native';
import { PricingCard } from 'react-native-elements'
import { LABELS } from '../../settings/labels';
import { purchase } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

class Pricing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0
    }
  }

  componentDidMount() {
    let price = this.props.products.reduce((total, product) => total + product.price, 0);
    this.setState({price: price})
  }

  finish = () => {
    this.props.purchase()
    Alert.alert('Compra finalizada')
    Actions.home()
  }

  render() {
    return (
      <PricingCard
        color='green'
        title={LABELS.Cart.totalPrice}
        price={'R$' + this.state.price}
        info={[]}
        button={{ title: LABELS.Cart.purchase, icon: 'flight-takeoff' }}
        onButtonPress={this.finish}
      />
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({purchase},dispatch)
)
export default connect(null, mapDispatchToProps)(Pricing)