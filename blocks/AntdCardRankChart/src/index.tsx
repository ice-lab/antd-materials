import React from 'react';
import { Card, Row, Col, Divider } from 'antd';

import styles from './index.module.less';

interface DataItem {
  name?: string;
  rate?: string;
  color?: string;
  key?: number;
}

interface CardConfig {
  title?: string;
  dataSource?: DataItem[];
}

export interface AntdCardRankChartProps {
  cardConfig?: CardConfig;
}

const DEFAULT_DATA: CardConfig = {
  title: '区域销售',
  dataSource: [
    { name: '亚洲', rate: '40%', color: '#2B7FFB', key: 1 },
    { name: '欧洲', rate: '30%', color: '#00D6CB', key: 2 },
    { name: '南非', rate: '20%', color: '#F0C330', key: 3 },
    { name: '美洲', rate: '10%', color: '#3840D9', key: 4 },
  ],
};

const AntdCardRankChart: React.FunctionComponent<AntdCardRankChartProps> = (
  props: AntdCardRankChartProps,
): JSX.Element => {
  const { cardConfig = DEFAULT_DATA } = props;
  const { title, dataSource } = cardConfig;
  return (
    <Card title={title}>
      <Row gutter={24}>
        <Col span={12}>
          <div className={styles.hisMap} />
        </Col>
        <Col span={6}>
          <div className={styles.histogram}>
            {dataSource &&
              dataSource.map((item) => (
                <div key={item.key} style={{ justifyContent: 'flex-start' }}>
                  <div className={styles.hisTitle}>{item.name}</div>
                  <div style={{ display: 'flex' }}>
                    <div
                      style={{ backgroundColor: item.color, width: item.rate }}
                    />
                    <div className={styles.hisRate}>{item.rate}</div>
                  </div>
                </div>
              ))}
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.subCard}>
            <Divider type="vertical" className={styles.subDiv} />
            <div className={styles.subBody}>
              <div className={styles.subName}>亚洲</div>
              <Divider type="horizontal" />
              <div className={styles.subMain}>
                <div>
                  <div className={styles.subTypeName}>商品类目1</div>
                  <div className={styles.subTypeValue}>6,123</div>
                </div>
                <Divider type="vertical" className={styles.subMainDiv} />
                <div>
                  <div className={styles.subTypeName}>商品类目2</div>
                  <div className={styles.subTypeValue}>132,4</div>
                </div>
              </div>
              <div className={styles.subFooter}>
                <div>周同比</div>
                <div>45%↑</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default AntdCardRankChart;
