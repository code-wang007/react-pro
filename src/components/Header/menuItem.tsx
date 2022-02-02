import React from 'react'
import { menuItemInfoType, menuChildrenList } from './types'
import { DownOutlined, UpOutlined } from '@ant-design/icons';

interface IProps {
  onClick?: (url: string) => void,
  menuItemInfo: menuChildrenList,
}

class MenuItem extends React.Component<IProps, any> {
  itemHandleClick = (url: string) => {
    const { onClick } = this.props
    if (onClick) {
      onClick(url)
    }
  }
  render() {
    const { menuItemInfo } = this.props
    return (
      <div className='header-menu-item'>
        <div
          className='name-arrow-item'
          onClick={() => this.itemHandleClick(menuItemInfo.url)}
        >
          <div className="item menu-label">{menuItemInfo.name}</div>
          {
            menuItemInfo.menuChildren.length ? 
            <div className="item arrow-icon">
              <DownOutlined />
            </div> : ''
          }
        </div>
        {
          menuItemInfo.menuChildren.length ? 
          <div className="item menu-child-box">
            {
              menuItemInfo.menuChildren.map((item, index) => (
                <div
                  className='menu-child-box-item'
                  key={`child-key${index}`}
                  onClick={() => this.itemHandleClick(item.url)}
                >{item.label}</div>
              ))
            }
          </div>
          : ''
        }
        
        
      </div>
    )
  }
}

export default MenuItem
