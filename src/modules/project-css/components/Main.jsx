import React, {Component} from 'react'
// import '../sass/main.scss'
// import '../sass/modules/mixins.scss'
// import '../sass/modules/functions.scss'
// import '../sass/modules/condicionales.scss'
import '../sass/modules/functionsAdvance.scss'

class Main extends Component {
  render () {
    return (
      <div>
        <div className="main">
          <div className="box" />
        </div>
        <div className="box2">
          <div className="box2__title">name</div>
          <div className="box2__link">
            {/* <a href="#">link</a> */}
          </div>
        </div>
        <div className="box3">
          <div className="widget"></div>
          <div className="footer">
            <div className="widget"></div>
          </div>
        </div>
        <div className="box4">
          <nav className="menu">
            <ul>item 1</ul>
            <ul>item 2</ul>
            <ul>item 3</ul>
            <ul>item 4</ul>
            <ul>item 5</ul>
          </nav>
          <div className="btn">
            <button className="btn">Click</button>
          </div>
          <button className="btn">Click</button>
          <a className="btn__link">Click Link</a>
        </div>
        <div className="box5">
          <div className="banner"></div>
        </div>
        <div className="mixins"></div>
        <div className="functions"></div>
        <div className="gallery">
          <div className="photo">test1</div>
          <div className="photo">test2</div>
        </div>
        <div className="advance"></div>
      </div>
    )
  }
}
export default Main
