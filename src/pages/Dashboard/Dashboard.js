import { Col, Row, Typography } from 'antd'
import { getGreeting } from '@utils/timeDate'
import useUserInfo from '@hooks/useUserInfo'
import DashboardCard from '@components/DashboardCard/DashboardCard';
import { Link } from 'react-router-dom';
import { sitePathConfig } from '@config/sitePathConfig';

const Dashboard = () => {
    const { info } = useUserInfo();
    
    return (
        <Row gutter={[20, 20]}>
              <Col span={24}>
                    <Typography.Title level={3} style={{ margin : 0, fontSize: 18 }}>
                          {getGreeting()}, {info.firstName} {info.lastName}
                    </Typography.Title>
              </Col>

              <Col span={24}>
                    <Row gutter={[20, 20]}>
                           <Col span={6}>
                                <DashboardCard title={'Users'}>
                                      <Link to={sitePathConfig.USERS}>Link</Link>
                                </DashboardCard>
                           </Col>
                           <Col span={6}>
                                <DashboardCard title={'Workspace'}>
                                     <Link to={sitePathConfig.WORKSPACE}>Link</Link>
                                </DashboardCard>
                           </Col>
                           <Col span={6}>
                                <DashboardCard title={'Projects'}>

                                </DashboardCard>
                           </Col>
                           <Col span={6}>
                                <DashboardCard title={'Tickets'}>

                                </DashboardCard>
                           </Col>
                    </Row>
              </Col>
        </Row>
    )
}

export default Dashboard