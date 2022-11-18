

// component card item
const CardItem = ({totalFollowers,userNameSocialMedia,countFollowers,urlImg,textFollowers,countImg}) =>{
    return(
        <div className="card-item"> 
                    <div className="header-card-icon">
                        <img src={urlImg} alt="" />
                        <span className="username-social-media">
                            {userNameSocialMedia}
                        </span>
                    </div>
                    <h2 className="followers text-center mt-3">{totalFollowers}</h2>
                    <p className="text-followers text-center text-uppercase">{textFollowers}</p>
                    <div className="footer-card-icon">
                        <img src={countImg} alt="" />
                        <span className="count-followers text-capitalize">
                         {countFollowers}
                        </span>
                    </div>
        </div>
    )
}


//   component SocialMediaContainer 
const SocialMediaContainer = ()=>{

    let dataCards = [
        {
            id:1,
            userNameSocialMedia:'@nathanf',
            totalFollowers:'1987',
            textFollowers:'followers',
            urlImg:'assets/images/icon-facebook.svg',
            countImg:'assets/images/icon-up.svg',
            countFollowers:'12 today'
        },
        {
            id:2,
            userNameSocialMedia:'@nathanf',
            totalFollowers:'1044',
            textFollowers:'followers',
            urlImg:'assets/images/icon-twitter.svg',
            countImg:'assets/images/icon-up.svg',
            countFollowers:'99 today'
        },
        {
            id:3,
            userNameSocialMedia:'@realnathanf',
            totalFollowers:'11k',
            textFollowers:'followers',
            urlImg:'assets/images/icon-instagram.svg',
            countImg:'assets/images/icon-up.svg',
            countFollowers:'1099 today'
        },
        {
            id:4,
            userNameSocialMedia:'Nathan F.',
            totalFollowers:'8239',
            textFollowers:'subscribers',
            urlImg:'assets/images/icon-youtube.svg',
            countImg:'assets/images/icon-down.svg',
            countFollowers:'144 today'
        },
    ]

    return (
        <section className="social-media-container container">
            <div className="card-container">
            {
                dataCards.map(e =>{
                    return (
                        <CardItem 
                        key={e.id}
                        userNameSocialMedia={e.userNameSocialMedia}
                        totalFollowers={e.totalFollowers}
                        textFollower={e.textFollowers}
                        urlImg={e.urlImg}
                        countImg={e.countImg}
                        countFollowers={e.countFollowers}
                        />
                    )
                })
            }             
            </div>
        </section>
    )
}

export default SocialMediaContainer;