import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage, useModel } from 'umi';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default (): React.ReactNode => {
  const { setName } = useModel('@@qiankunStateFromMaster');
  const intl = useIntl();
  function changeName() {
    setName('子应用')
  }
  return (
    <PageContainer>      
      欢迎来到react子应用
      <button onClick={changeName}>穿参数</button>
    </PageContainer>
  );
};
