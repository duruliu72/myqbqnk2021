import { Link } from "react-router-dom";
const LeftSideBar = () => {
    return (
        <div className="left side-menu">
            <div className="sidebar-inner slimscrollleft">
                <div className="user-details">
                    <div className="pull-left">
                        <img src="assets/images/users/avatar-1.jpg" alt="" className="thumb-md rounded-circle" />
                    </div>
                    <div className="user-info">
                        <div className="dropdown">
                            <Link to="/x" href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                John Doe
                        </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/x" href="javascript:void(0)" className="dropdown-item"><i
                                    className="md md-face-unlock mr-2"></i> Profile<div className="ripple-wrapper">
                                    </div></Link></li>
                                <li><Link to="/x" href="javascript:void(0)" className="dropdown-item"><i
                                    className="md md-settings mr-2"></i> Settings</Link></li>
                                <li><Link to="/x" href="javascript:void(0)" className="dropdown-item"><i className="md md-lock mr-2"></i>
                                    Lock screen</Link></li>
                                <li><Link to="/x" href="javascript:void(0)" className="dropdown-item"><i
                                    className="md md-settings-power mr-2"></i> Logout</Link></li>
                            </ul>
                        </div>

                        <p className="text-muted m-0">Administrator</p>
                    </div>
                </div>

                <div id="sidebar-menu">
                    <ul>
                        <li>
                            <Link to="/x" href="index-2.html" className="waves-effect"><i className="md md-home"></i><span> Dashboard
                            </span></Link>
                        </li>

                        <li className="has_sub">
                            <Link to="/x" href="#" className="waves-effect"><i className="md md-mail"></i><span> Mail </span><span
                                className="pull-right"><i className="md md-add"></i></span></Link>
                            <ul className="list-unstyled">
                                <li><Link to="/x" href="mail-inbox.html">Inbox</Link></li>
                                <li><Link to="/x" href="mail-compose.html">Compose Mail</Link></li>
                                <li><Link to="/x" href="mail-read.html">View Mail</Link></li>
                            </ul>
                        </li>

                        <li>
                            <Link to="/x" href="calendar.html" className="waves-effect"><i className="md md-event"></i><span> Calendar
                            </span></Link>
                        </li>

                        <li className="has_sub">
                            <Link to="/x" href="#" className="waves-effect"><i className="md md-palette"></i> <span> Elements </span> <span
                                className="pull-right"><i className="md md-add"></i></span></Link>
                            <ul className="list-unstyled">
                                <li><Link to="/x" href="ui-typography.html">Typography</Link></li>
                                <li><Link to="/x" href="ui-buttons.html">Buttons</Link></li>
                                <li><Link to="/x" href="ui-cards.html">Cards</Link></li>
                                <li><Link to="/x" href="ui-checkbox-radio.html">Checkboxs-Radios</Link></li>
                                <li><Link to="/x" href="ui-tabs-accordions.html">Tabs & Accordions</Link></li>
                                <li><Link to="/x" href="ui-modals.html">Modals</Link></li>
                                <li><Link to="/x" href="ui-bootstrap.html">BS Elements</Link></li>
                                <li><Link to="/x" href="ui-progressbars.html">Progress Bars</Link></li>
                                <li><Link to="/x" href="ui-notification.html">Notification</Link></li>
                                <li><Link to="/x" href="ui-sweet-alert2.html">Sweet-Alert2</Link></li>
                            </ul>
                        </li>

                        <li className="has_sub">
                            <Link to="/x" href="#" className="waves-effect"><i className="md md-invert-colors-on"></i><span> Components
                            </span><span className="pull-right"><i className="md md-add"></i></span></Link>
                            <ul className="list-unstyled">
                                <li><Link to="/x" href="components-grid.html">Grid</Link></li>
                                <li><Link to="/x" href="components-portlets.html">Portlets</Link></li>
                                <li><Link to="/x" href="components-widgets.html">Widgets</Link></li>
                                <li><Link to="/x" href="components-nestable-list.html">Nesteble</Link></li>
                                <li><Link to="/x" href="components-rangeslider.html">Sliders </Link></li>
                                <li><Link to="/x" href="components-gallery.html">Gallery </Link></li>
                                <li><Link to="/x" href="components-pricing.html">Pricing Table </Link></li>
                            </ul>
                        </li>

                        <li className="has_sub">
                            <Link to="/x" href="#" className="waves-effect"><i className="md md-redeem"></i> <span> Icons </span> <span
                                className="pull-right"><i className="md md-add"></i></span></Link>
                            <ul className="list-unstyled">
                                <li><Link to="/x" href="icons-material.html">Material Design</Link></li>
                                <li><Link to="/x" href="icons-ion.html">Ion Icons</Link></li>
                                <li><Link to="/x" href="icons-fontawesome.html">Font awesome</Link></li>
                            </ul>
                        </li>

                        <li className="has_sub">
                            <Link to="/x" href="#" className="waves-effect"><i className="md md-now-widgets"></i><span> Forms </span><span
                                className="pull-right"><i className="md md-add"></i></span></Link>
                            <ul className="list-unstyled">
                                <li><Link to="/x" href="form-elements.html">General Elements</Link></li>
                                <li><Link to="/x" href="form-validation.html">Form Validation</Link></li>
                                <li><Link to="/x" href="form-advanced.html">Advanced Form</Link></li>
                                <li><Link to="/x" href="form-wizard.html">Form Wizard</Link></li>
                                <li><Link to="/x" href="form-wysiwyg.html">WYSIWYG Editor</Link></li>
                                <li><Link to="/x" href="form-codeeditor.html">Code Editors</Link></li>
                                <li><Link to="/x" href="form-uploads.html">Multiple File Upload</Link></li>
                                <li><Link to="/x" href="form-xeditable.html">X-editable</Link></li>
                            </ul>
                        </li>

                        <li className="has_sub">
                            <Link to="/x" href="#" className="waves-effect"><i className="md md-view-list"></i><span> Tables </span><span
                                className="pull-right"><i className="md md-add"></i></span></Link>
                            <ul className="list-unstyled">
                                <li><Link to="/x" href="tables-basic.html">Basic Tables</Link></li>
                                <li><Link to="/x" href="tables-datatable.html">Data Table</Link></li>
                                <li><Link to="/x" href="tables-editable.html">Editable Table</Link></li>
                                <li><Link to="/x" href="tables-responsive.html">Responsive Table</Link></li>
                            </ul>
                        </li>

                        <li className="has_sub">
                            <Link to="/x" href="#" className="waves-effect"><i className="md md-poll"></i><span> Charts </span><span
                                className="pull-right"><i className="md md-add"></i></span></Link>
                            <ul className="list-unstyled">
                                <li><Link to="/x" href="charts-morris.html">Morris Chart</Link></li>
                                <li><Link to="/x" href="charts-chartjs.html">Chartjs</Link></li>
                                <li><Link to="/x" href="charts-flot.html">Flot Chart</Link></li>
                                <li><Link to="/x" href="charts-peity.html">Peity Charts</Link></li>
                                <li><Link to="/x" href="charts-sparkline.html">Sparkline Charts</Link></li>
                                <li><Link to="/x" href="charts-radial.html">Radial charts</Link></li>
                                <li><Link to="/x" href="charts-other.html">Other Chart</Link></li>
                            </ul>
                        </li>

                        <li className="has_sub">
                            <Link to="/x" href="#" className="waves-effect"><i className="md md-place"></i><span> Maps </span><span
                                className="pull-right"><i className="md md-add"></i></span></Link>
                            <ul className="list-unstyled">
                                <li><Link to="/x" href="maps-google.html"> Google Map</Link></li>
                                <li><Link to="/x" href="maps-vector.html"> Vector Map</Link></li>
                            </ul>
                        </li>

                        <li className="has_sub">
                            <Link to="/x" href="#" className="waves-effect"><i className="md md-pages"></i><span> Pages </span><span
                                className="pull-right"><i className="md md-add"></i></span></Link>
                            <ul className="list-unstyled">
                                <li><Link to="/x" href="pages-profile.html">Profile</Link></li>
                                <li><Link to="/x" href="pages-timeline.html">Timeline</Link></li>
                                <li><Link to="/x" href="pages-invoice.html">Invoice</Link></li>
                                <li><Link to="/x" href="pages-email-template.html">Email template</Link></li>
                                <li><Link to="/x" href="pages-contact.html">Contact-list</Link></li>
                                <li><Link to="/x" href="pages-login.html">Login</Link></li>
                                <li><Link to="/x" href="pages-register.html">Register</Link></li>
                                <li><Link to="/x" href="pages-recoverpw.html">Recover Password</Link></li>
                                <li><Link to="/x" href="pages-lock-screen.html">Lock Screen</Link></li>
                                <li><Link to="/x" href="pages-blank.html">Blank Page</Link></li>
                                <li><Link to="/x" href="pages-maintenance.html">Maintenance</Link></li>
                                <li><Link to="/x" href="pages-coming-soon.html">Coming-soon</Link></li>
                                <li><Link to="/x" href="pages-404.html">404 Error</Link></li>
                                <li><Link to="/x" href="pages-404_alt.html">404 alt</Link></li>
                                <li><Link to="/x" href="pages-500.html">500 Error</Link></li>
                            </ul>
                        </li>

                        <li className="has_sub">
                            <Link to="/x" href="javascript:void(0);" className="waves-effect"><i className="md md-share"></i><span>Multi
                                Level </span><span className="pull-right"><i className="md md-add"></i></span></Link>
                            <ul>
                                <li className="has_sub">
                                    <Link to="/x" href="javascript:void(0);" className="waves-effect"><span>Menu Level 1.1</span> <span
                                        className="pull-right"><i className="md md-add"></i></span></Link>
                                    <ul>
                                        <li><Link to="/x" href="javascript:void(0);"><span>Menu Level 2.1</span></Link></li>
                                        <li><Link to="/x" href="javascript:void(0);"><span>Menu Level 2.2</span></Link></li>
                                        <li><Link to="/x" href="javascript:void(0);"><span>Menu Level 2.3</span></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/x" href="javascript:void(0);"><span>Menu Level 1.2</span></Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>

    );
}

export default LeftSideBar;