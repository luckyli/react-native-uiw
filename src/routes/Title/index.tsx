import React from 'react';
import { Text } from 'react-native';
import { H1, H2, H3, H4, H5, H6 } from '../../../components';
import { ComProps } from '../../typings';
import Layout, { Container } from '../../Layout';
const { Header, Body, Card, Footer } = Layout;

export interface ListViewProps extends ComProps { }

export default class ListView extends React.Component<ListViewProps> {
  render() {
    const { navigation } = this.props;
    const description = navigation.getParam('description');
    const title = navigation.getParam('title');
    return (
      <Container isScroll={false}>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <H1>这是标题一</H1>
            <H2>这是标题二</H2>
            <H3>这是标题二</H3>
            <H4>这是标题二</H4>
            <H5>这是标题二</H5>
            <H6>这是标题二</H6>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}