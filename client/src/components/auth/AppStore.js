const AppStore = () => {
    return (
        <div className="app">
            <div className="app__content">
                <div className="app__top">
                    <div className="logo">
                        <img src="image/logo.png" alt="" />
                    </div>
                    <p>We are the kinder, smarter social network.</p>
                </div>
                <div className="app__bottom">
                    <p>Download Liker app on your smartphone</p>
                    <div className="icon-logo">
                        <img src="image/appstore.png" alt="" />
                        <img src="image/googleplay.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppStore;