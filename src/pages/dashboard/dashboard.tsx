import Title from "antd/es/typography/Title";
import { Button, Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { useNavigate } from "react-router-dom";

interface DataType {
  key: string;
  id: number;
  name: string;
  email: string;
  chart: number;
}


function Dashboard() {
  const navigate = useNavigate();

  const data: DataType[] = [
    {
      key: '1',
      id: 1,
      name: 'John Brown',
      email: 'john@gmail.com',
      chart: 2,
    },
    {
      key: '2',
      id: 2,
      name: 'Jim Green',
      email: 'jim@gmail.com',
      chart: 3,
    }
  ];

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Chart',
      dataIndex: 'chart',
      key: 'chart',
    },
    {
      title: 'Action',
      key: 'action',
      width: 200,
      render: (_, record) => (
        <Space size="middle">
          <Button color="primary" variant="text" onClick={() => navigate(`project/${record.id}`)}>
            Edit
          </Button>
          <Button color="danger" variant="text">
            Delete
          </Button>
        </Space>
      ),
    },
  ];


  return (
    <div style={{ padding: 48 }}>
      <Title level={2}>Project</Title>

      <Table<DataType> columns={columns} dataSource={data} />
    </div>
  )
}

export default Dashboard