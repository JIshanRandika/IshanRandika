import React, {Component} from 'react';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/iam.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

                {/*<h2>Key Competencies</h2>*/}
                {/*<p>*/}
                {/*    {*/}
                {/*        resumeData.keyCompetencies && resumeData.keyCompetencies.map((item)=>{*/}
                {/*            return(*/}
                {/*                <div className="row item">*/}
                {/*                    <div className="twelve columns">*/}
                {/*                        {item.competence}*/}

                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        })*/}
                {/*    }*/}
                {/*</p>*/}


            </div>
         </div>
      </section>
    );
  }
}