import React, {Component} from 'react';

export default class News extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials" style={{width:"100%"}}>
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>My News</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider" style={{width:"auto"}}>
                <ul className="slides" style={{width:"auto"}}>
                  {
                    resumeData.news && resumeData.news.map((item)=>{
                      return(
                        <li style={{width:"auto"}}>
                          <blockquote>
                            <p style={{width:"auto"}}>
                            {item.description}
                            </p>
                            <cite style={{width:"auto"}}>{item.date}</cite>
                          </blockquote>
                        </li>
                      )
                    })
                  }
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  }
}