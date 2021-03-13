const Breadcumb = (props) => {
    const dataLen = props.bcdata.length;
    return (<div className="row">
        <div className="col-sm-12">
            <h4 className="pull-left page-title">{props.title}</h4>
            <ol className="breadcrumb pull-right">
                {props.bcdata.map((item, index) => {
                    if (dataLen === index + 1) {
                        return <li key={index} className="active">{item}</li>
                    } else {
                        return <li key={index}><a href="#">{item}</a></li>
                    }
                })}
            </ol>
        </div>
    </div>);
}

export default Breadcumb;