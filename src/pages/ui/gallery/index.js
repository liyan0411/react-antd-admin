import React from 'react'
import "./index.less"

var imgUrl = require('@/assets/imgs/beauty.jpg')
class Gallery extends React.Component {
  componentDidMount() {}
  componentWillUnmount = () => {}
  render() {
    const imgs = [
      imgUrl,
      imgUrl
    ]
    return (
      <div className="masonry">
        {imgs.map((v, i) => {
          return (
            <div className="item" key={i}>
              <img className="lazy" src={v} alt="" />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Gallery
