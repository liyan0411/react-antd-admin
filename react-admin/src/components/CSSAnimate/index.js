import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import cssAnimate, { isCssAnimationSupported } from 'css-animation'
import classNames from 'classnames'

class CSSAnimate extends PureComponent {
  static propTypes = {
    type: PropTypes.string, // 动画名称
    callback: PropTypes.func, // 动画结束的回调函数
    duration: PropTypes.number, // 动画持续时间
    delay: PropTypes.number // 动画延时
  }

  componentDidMount() {
    const { type, callback } = this.props
    this.animate(type, callback)
  }

  componentDidUpdate(prevProps, prevState) {
    const { type, callback } = this.props
    this.animate(type, callback)
  }

  animate = (type, callback) => {
    const node = ReactDOM.findDOMNode(this)

    if (isCssAnimationSupported && type) {
      cssAnimate(node, type, callback)
    } else if (!isCssAnimationSupported) {
      console.warn('不支持css动画')
    }
  }

  //  遍历对象 获取 指定几个key ，生成新对象
  omits= (objs, arr) => {
    let newObj={};
    arr.map((key)=>{
      newObj[key] = objs[key]?objs[key]:null;
      return newObj[key];
    })
    return newObj;
  }
  render() {
    const {
      className,
      children,
      delay,
      duration,
      style,
      ...otherProps
    } = this.props
    const classnames = classNames('animated', className)
    const _style = { ...style }
    if (duration) {
      _style.animationDuration = duration + 'ms'
      _style.WebkitAnimationDuration = duration + 'ms'
    }

    if (delay) {
      _style.animationDelay = delay + 'ms'
      _style.WebkitAnimationDelay = delay + 'ms'
    }

    const divProps = this.omits(otherProps, ['type', 'callback', 'delay', 'duration'])

    return (
      <div className={classnames} {...divProps} style={_style}>
        {children}
      </div>
    )
  }
}

export default CSSAnimate
