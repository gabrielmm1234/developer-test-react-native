import React from 'react';
import { Router, Stack, Scene, NavigationBar } from 'react-native-router-flux';
import { styles } from './style';
import Home from '../../pages/Home/index';
import ProductCard from '../../components/ProductCard/index';
import Cart from '../../components/Cart/index';
import { LABELS } from '../labels';

export const Routes = () => (
    <Router
        navigationBarStyle={styles.sceneStyle}
        renderRightButton={<Cart/>}
        leftButtonIconStyle={{ tintColor: '#fff'}}
    >
        <Stack key="root" title={LABELS.Header.title}>
            <Scene key="home" component={Home} initial />
            <Scene key="product" component={ProductCard}/>
        </Stack>
    </Router>
)