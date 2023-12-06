export default function Courses(imgpath, headingtext, paragraphText){
    return(
<>
<div className="col-lg-4 col-md-6">
<div className="card border-2">
                        <img src={imgpath} className="card-img-top" alt=""/>
                        <div className="card-body text-center text-white">
                            <h5 className="card-title">{headingtext}</h5>
                            <p className="card-text">{ paragraphText}</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                    </div>
</>
    );
}