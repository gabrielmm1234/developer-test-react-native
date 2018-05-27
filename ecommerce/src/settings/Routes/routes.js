import React from 'react';
import { Router, Stack, Scene, NavigationBar } from 'react-native-router-flux';
import { styles } from './style';
import Home from '../../pages/Home/index';
import ProductCard from '../../components/ProductCard/index';
import { Icon } from 'react-native-vector-icons/FontAwesome';

export const Routes = () => (
    <Router navigationBarStyle={styles.sceneStyle}
        icon={<Icon name='shopping-cart' size={30} />}
    >
        <Stack key="root">
            <Scene key="home" component={Home} />
            <Scene key="product" component={ProductCard}/>
        </Stack>
    </Router>
)