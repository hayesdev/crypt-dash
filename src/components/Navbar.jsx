import React from 'react'
import {Button, Menu, Typography, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to='/'>Crypt-Dash</Link>
            </Typography.Title>
            {/* <Button className="menu-control-container"></Button> */}
        </div>
        <Menu theme="dark">
            <Menu.Item key="home" icon={<HomeOutlined/>}><Link to='/'>Home</Link></Menu.Item>
        </Menu>
        <Menu theme="dark">
            <Menu.Item key='cryptocurrencies' icon={<FundOutlined/>}><Link to='/cryptocurrencies'>Cryptocurrencies</Link></Menu.Item>
        </Menu>
        <Menu theme="dark">
            <Menu.Item key='exchanges' icon={<MoneyCollectOutlined/>}><Link to='/exchanges'>Money</Link></Menu.Item>
        </Menu>
        <Menu theme="dark">
            <Menu.Item key='news' icon={<BulbOutlined/>}><Link to='/'>News</Link></Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar