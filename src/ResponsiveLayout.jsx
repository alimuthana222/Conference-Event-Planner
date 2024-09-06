import React from 'react';

function ResponsiveLayout() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">عمود 1</h5>
              <p className="card-text">هذا هو النص داخل العمود الأول.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">عمود 2</h5>
              <p className="card-text">هذا هو النص داخل العمود الثاني.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">عمود 3</h5>
              <p className="card-text">هذا هو النص داخل العمود الثالث.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveLayout;
