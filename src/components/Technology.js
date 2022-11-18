function TechStack({image,title,para,link}) {
    return(
        <div style={{marginTop:'100px'}} className="row row-content align-items-center mt-12">
        <div className="col-12 col-sm-4 order-sm-last col-md-3">
            <a href={link} target="_blank">
                <img className="d-flex mr-3 img-thumbnail align-self-center gallery.caption-3" src={image} alt="" height="200" width="200" />
            </a>
        </div>
        <div className="col col-sm order-sm-first col-md">
            <div className="media">
            <h3>{title}</h3>
                <div className="media-body">
                    <h2 className="mt-5" style={{fontFamily: 'Annie Use Your Telescope'}}>MetaZord</h2>
                    <h4 className=" roboto-mono">What is it</h4>
                    <p>{para}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TechStack