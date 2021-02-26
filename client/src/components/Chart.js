import { Link } from "react-router-dom";
const Chart = () => {
    return (<div className="row">
        <div className="col-xl-8">
            <div className="portlet">

                <div className="portlet-heading">
                    <h3 className="portlet-title text-dark text-uppercase">
                        Website Stats
                </h3>
                    <div className="portlet-widgets">
                        <Link to="/x" href="javascript:;" data-toggle="reload"><i className="ion-refresh"></i></Link>
                        <span className="divider"></span>
                        <Link to="/x" data-toggle="collapse" href="#portlet1"><i className="ion-minus-round"></i></Link>
                        <span className="divider"></span>
                        <Link to="/x" href="#" data-toggle="remove"><i className="ion-close-round"></i></Link>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div id="portlet1" className="panel-collapse collapse show">
                    <div className="portlet-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="website-stats" style={{ position: 'relative', height: "320px" }}></div>
                                <div className="row text-center m-t-30">
                                    <div className="col-sm-4">
                                        <h4 className="counter">86,956</h4>
                                        <small className="text-muted"> Weekly Report</small>
                                    </div>
                                    <div className="col-sm-4">
                                        <h4 className="counter">86,69</h4>
                                        <small className="text-muted">Monthly Report</small>
                                    </div>
                                    <div className="col-sm-4">
                                        <h4 className="counter">948,16</h4>
                                        <small className="text-muted">Yearly Report</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-xl-4">
            <div className="portlet">

                <div className="portlet-heading">
                    <h3 className="portlet-title text-dark text-uppercase">
                        Website Stats
                </h3>
                    <div className="portlet-widgets">
                        <Link to="/x" href="javascript:;" data-toggle="reload"><i className="ion-refresh"></i></Link>
                        <span className="divider"></span>
                        <Link to="/x" data-toggle="collapse" href="#portlet2"><i className="ion-minus-round"></i></Link>
                        <span className="divider"></span>
                        <Link to="/x" href="#" data-toggle="remove"><i className="ion-close-round"></i></Link>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div id="portlet2" className="panel-collapse collapse show">
                    <div className="portlet-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="pie-chart">
                                    <div id="pie-chart-container" className="flot-chart"
                                        style={{ height: '320px' }} >
                                    </div>
                                </div>

                                <div className="row text-center m-t-30">
                                    <div className="col-sm-6">
                                        <h4 className="counter">86,956</h4>
                                        <small className="text-muted"> Weekly Report</small>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4 className="counter">86,69</h4>
                                        <small className="text-muted">Monthly Report</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Chart;