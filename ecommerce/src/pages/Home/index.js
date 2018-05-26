import React from 'react';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { LABELS } from '../../settings/labels';
import { styles } from './style';
class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
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
                    {
                        icon: 'home',
                        color: '#fff' 
                    }
                }
            />
        )
    }
}
const mapStateToProps = state => (
    {
        state: state
    }
)
export default connect(mapStateToProps)(Home)