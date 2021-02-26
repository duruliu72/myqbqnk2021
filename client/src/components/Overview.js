const Overview = () => {
    return (<div className="row">
        <div className="col-md-6 col-xl-3">
            <div className="mini-stat clearfix bx-shadow bg-white">
                <span className="mini-stat-icon bg-info"><i className="ion-social-usd"></i></span>
                <div className="mini-stat-info text-right text-dark">
                    <span className="counter text-dark">15852</span>
                Total Sales
            </div>
                <div className="tiles-progress">
                    <div className="m-t-20">
                        <h5 className="text-uppercase">Target <span className="pull-right">60%</span></h5>
                        <div className="progress progress-sm m-0">
                            <div className="progress-bar progress-bar-info" role="progressbar"
                                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                style={{ width: '60%' }}>
                                <span className="sr-only">60% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-xl-3">
            <div className="mini-stat clearfix bx-shadow bg-white">
                <span className="mini-stat-icon bg-purple"><i className="ion-ios7-cart"></i></span>
                <div className="mini-stat-info text-right text-dark">
                    <span className="counter text-dark">956</span>
                New Orders
            </div>
                <div className="tiles-progress">
                    <div className="m-t-20">
                        <h5 className="text-uppercase">Target <span className="pull-right">90%</span></h5>
                        <div className="progress progress-sm m-0">
                            <div className="progress-bar progress-bar-purple" role="progressbar"
                                aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                                style={{ width: '90%' }}>
                                <span className="sr-only">90% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-xl-3">
            <div className="mini-stat clearfix bx-shadow bg-white">
                <span className="mini-stat-icon bg-success"><i className="ion-android-contacts"></i></span>
                <div className="mini-stat-info text-right text-dark">
                    <span className="counter text-dark">5210</span>
                New Users
            </div>
                <div className="tiles-progress">
                    <div className="m-t-20">
                        <h5 className="text-uppercase">Target <span className="pull-right">57%</span></h5>
                        <div className="progress progress-sm m-0">
                            <div className="progress-bar progress-bar-success" role="progressbar"
                                aria-valuenow="57" aria-valuemin="0" aria-valuemax="100"
                                style={{ width: '57%' }}>
                                <span className="sr-only">57% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-xl-3">
            <div className="mini-stat clearfix bx-shadow bg-white">
                <span className="mini-stat-icon bg-primary"><i className="ion-eye"></i></span>
                <div className="mini-stat-info text-right text-dark">
                    <span className="counter text-dark">20544</span>
                Unique Visitors
            </div>
                <div className="tiles-progress">
                    <div className="m-t-20">
                        <h5 className="text-uppercase">Target <span className="pull-right">60%</span></h5>
                        <div className="progress progress-sm m-0">
                            <div className="progress-bar progress-bar-primary" role="progressbar"
                                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                style={{ width: '60%' }}>
                                <span className="sr-only">60% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Overview;