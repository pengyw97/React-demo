import React , { Component } from 'react';
import { Row , Col } from 'antd';

import ArticleList from '../components/articlelist';
import ArticleMenu from '../components/articlelistmenu';
import { menuList , colorList } from '../utils/utils';

export default class Home extends Component {
    render(){
        const tab = this.props.match.params.tab ?? 'all';
        return (
            <Row>
                <Col span={2}>
                    <ArticleMenu menuList={menuList} tab={tab} /> {/* 引入导航组件 */}
                </Col>
                <Col span={22}>
                    <ArticleList menuList={menuList} colorList={colorList} tab={tab} /> {/* 引入文章列表组件 */}
                </Col>
            </Row>
        )
    }
} 