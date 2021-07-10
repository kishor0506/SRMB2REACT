import React from 'react'

const Studparent=(data)=> {
    return (
        <div>
        <section className="testimonial py-5" id="testimonial">
    <div className="container">
        <div className="row ">
            <div className="col-md-4 py-5 bg-primary text-white text-center ">
                <div className=" ">
                    <div className="card-body">
                        <img src="https://cdn.dribbble.com/users/35253/screenshots/3984334/ideate_dribb.gif" />
                        <h2 className="py-3">Registration</h2>
                        <p>

</p>
                    </div>
                </div>
            </div>
            <div className="col-md-8 py-5 border">
                <h4 className="pb-4">Please fill with your details</h4>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                          <input id="First Name" name="Full Name" placeholder="First Name" className="form-control" type="text" onchange={data}/>
                        </div>
                        <div className="form-group col-md-6">
                          <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onchange={data}/>
                        </div>
                      </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input id="Mobile No." name="Mobile No." placeholder="Mobile No." className="form-control" required="required" type="text" onchange={data}/>
                        </div>
                       
                        <div className="form-group col-md-12">
                                  <textarea id="comment" name="comment" cols="40" rows="5" className="form-control" onchange={data}></textarea>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <div className="form-group">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                  <label className="form-check-label" for="invalidCheck2">
                                    <small>By clicking Submit, you agree to our Terms & Conditions, Visitor Agreement and Privacy Policy.</small>
                                  </label>
                                </div>
                              </div>
                    
                          </div>
                    </div>
                    
                    <div className="form-row">
                        <button type="button" className="btn btn-danger">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

        </div>
    )
}
export default Studparent;