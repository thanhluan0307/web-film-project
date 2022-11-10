import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import React from 'react';
import styles from './dropdown.module.scss';

const items = [
  {
    key: '1',
    label: 'Item 1',
  },
  {
    key: '2',
    label: 'Item 2',
  },
  {
    key: '3',
    label: 'Item 3',
  },
];
const DropDown = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ['3'],
    }}
  >
    <Typography.Link >
      <Space  className={styles.dropdown}>
        Content
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);
export default DropDown