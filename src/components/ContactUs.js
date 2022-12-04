import React, {Component} from 'react';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">

          <div className="row">

              <div className="columns contact-details">

                  <h2>Contact Details</h2>

                  <div className="row section-head">
                      <div className="ten columns">
                          <p className="lead">
                              Feel free to contact me for any work or suggestions below
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="row">
            <aside className="eigth columns footer-widgets">


                <p className="address">
                    <span>{resumeData.name}</span>
                    <br></br>
                    <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
                    <br></br>
                    <span>{resumeData.phone}</span>
                    <br></br>
                    <span>{resumeData.email}</span>
                </p>

              <div className="widget">
                <h4>Linked in :
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}