
import {useState} from 'react'


const CardOverview = (prop)=>{
    return(
            <div className="card-item-overview">
              <div className="overview-header">
                  <p className="view-header">{prop.viewHeader}</p>
                  <img src={prop.imgHeader} alt="" />
              </div>
              <div className="overview-footer">
                  <p className="view-footer">{prop.viewFooter}</p>
                  <div className="inner-overview-footer">
                  <img src={prop.imgFooter} alt="" />
                  <p className="count-overview-text">{prop.countOverview}</p>
                  </div>
              </div>
            </div>
    )
}


// component container overview

const ContainerOverview = ()=>{

    let [dataOverview,setDataOverview] = useState([
        {
            id:1,
            viewHeader:'page views',
            imgHeader:'assets/images/icon-facebook.svg',
            viewFooter:'87',
            imgFooter:'assets/images/icon-up.svg',
            countOverview:'3%'
        },
        {
            id:2,
            viewHeader:'likes',
            imgHeader:'assets/images/icon-facebook.svg',
            viewFooter:'52',
            imgFooter:'assets/images/icon-down.svg',
            countOverview:'2%'
        },
        {
            id:3,
            viewHeader:'likes',
            imgHeader:'assets/images/icon-instagram.svg',
            viewFooter:'5462',
            imgFooter:'assets/images/icon-up.svg',
            countOverview:'2257%'
        },
        {
            id:4,
            viewHeader:'profile views',
            imgHeader:'assets/images/icon-instagram.svg',
            viewFooter:'52k',
            imgFooter:'assets/images/icon-up.svg',
            countOverview:'1375%'
        },
        {
            id:5,
            viewHeader:'retweets',
            imgHeader:'assets/images/icon-twitter.svg',
            viewFooter:'117',
            imgFooter:'assets/images/icon-up.svg',
            countOverview:'303%'
        },
        {
            id:6,
            viewHeader:'likes',
            imgHeader:'assets/images/icon-twitter.svg',
            viewFooter:'507',
            imgFooter:'assets/images/icon-up.svg',
            countOverview:'553%'
        },
        {
            id:7,
            viewHeader:'likes',
            imgHeader:'assets/images/icon-youtube.svg',
            viewFooter:'107',
            imgFooter:'assets/images/icon-down.svg',
            countOverview:'19%'
        },
        {
            id:8,
            viewHeader:'total views',
            imgHeader:'assets/images/icon-youtube.svg',
            viewFooter:'1407',
            imgFooter:'assets/images/icon-down.svg',
            countOverview:'12%'
        }
    ])
    

    return(
    <section className="container-overview container">
        <h2 className="title-overview text-capitalize mb-4">
            overview - today
        </h2>
       <div className="card-container-overview">

        {
            dataOverview.map(e=>{
                return <CardOverview
                            key={e.id}
                            viewHeader={e.viewHeader}
                            imgHeader={e.imgHeader}
                            viewFooter={e.viewFooter}
                            imgFooter={e.imgFooter}
                            countOverview={e.countOverview}
                        /> 
            })
        }
        </div>

    </section>  
    )
}

export default ContainerOverview;