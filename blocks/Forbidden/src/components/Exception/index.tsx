import React, { FC } from 'react';
import { Card } from 'antd';
import styles from './index.module.less';

export interface ExceptionProps {
  statusCode: string;
  description: string;
  image: string;
}

const Exception: FC<ExceptionProps> = (props: ExceptionProps) => {
  const {
    statusCode = '404',
    description = '服务器好像挂了你要等会了',
    image = 'https://img.alicdn.com/tfs/TB14c1VoET1gK0jSZFhXXaAtVXa-200-200.png',
  } = props;

  return (
    <Card className={styles.exception}>
      <div>
        <img src={image} className={styles.exceptionImage} alt="img" />
        <h1 className={styles.statuscode}>{statusCode}</h1>
        <div className={styles.description}>{description}</div>
      </div>
    </Card>
  );
};

export default Exception;
