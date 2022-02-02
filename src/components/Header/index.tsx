import React from 'react'
import './style.scss'
import { UserOutlined } from '@ant-design/icons';
import { MENU_CONFIG } from '@src/common/constant/menu'
import MenuItem from './menuItem'

interface IProps {}

class Header extends React.Component<IProps> {
  menuHandleClick = (url: string) => {
    console.log('menu click', url)
  }
    render() {
      const userName = '王文卓'
        return (
            <div className='header-component-container'>
              <div className="header-logo"></div>
              <div className="header-menu">
                {
                  MENU_CONFIG.map((item, index) => (
                    <MenuItem 
                      key={`menu-key-${index}`}
                      menuItemInfo={item}
                      onClick={(url) => this.menuHandleClick(url)}
                    />
                  ))
                }
              </div>
              <div className="header-login-info">
                <span className="user-logo">
                  <UserOutlined />
                </span>
                <span>{ userName }</span>
              </div>
            </div>
        )
    }
}

export default Header