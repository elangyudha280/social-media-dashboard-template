

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
    return (
        <section className="social-media-container container">
            <div className="card-container">
            <CardItem 
            textFollowers="followers"
            urlImg="assets/images/icon-facebook.svg"
             userNameSocialMedia="@nathanf"
             totalFollowers="1987"
             countImg="assets/images/icon-up.svg"
             countFollowers="12 today"
            />
             <CardItem 
                     textFollowers="followers"
            urlImg="assets/images/icon-twitter.svg"
             userNameSocialMedia="@nathanf"
             totalFollowers="1044"
             countImg="assets/images/icon-up.svg"
             countFollowers="99 today"
            />
             <CardItem 
                     textFollowers="followers"
            urlImg="assets/images/icon-instagram.svg"
             userNameSocialMedia="@realnathanf"
             totalFollowers="11k"
             countImg="assets/images/icon-up.svg"
             countFollowers="1099 today"
            />
            <CardItem 
                    textFollowers="subscribers"
            urlImg="assets/images/icon-youtube.svg"
             userNameSocialMedia="Nathan F."
             totalFollowers="8239"
             countImg="assets/images/icon-down.svg"
             countFollowers="144 today"
            />
            </div>
        </section>
    )
}

export default SocialMediaContainer;