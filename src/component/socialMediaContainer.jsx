

// component card item
const CardItem = () =>{
    return(
        
    )
}


//   component SocialMediaContainer 
const SocialMediaContainer = ()=>{
    return (
        <section className="social-media-container container">
            <div className="card-container">
                <div className="card-item">
                    <div className="header-card-icon">
                        <img src="assets/images/icon-facebook.svg" alt="" />
                        <span className="username-social-media">
                            @nathanf
                        </span>
                    </div>
                    <h2 className="followers text-center mt-3">1987</h2>
                    <p className="text-followers text-center text-uppercase">followers</p>
                    <div className="footer-card-icon">
                        <img src="assets/images/icon-up.svg" alt="" />
                        <span className="count-followers">
                        12 today
                        </span>
                    </div>
                </div>
                <div className="card-item"></div>
                <div className="card-item"></div>
                <div className="card-item"></div>
            </div>
        </section>
    )
}

export default SocialMediaContainer;