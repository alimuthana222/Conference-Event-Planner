import React, { useState } from "react";
import "./App.css";
import ConferenceEvent from "./ConferenceEvent";
import AboutUs from "./AboutUs";

function App() {
  const [showVenue, setShowVenue] = useState(false);

  const handleGetStarted = () => {
    setShowVenue(true);
  };

  return (
    <>
      <header className="first_page">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <h1 className="budget_heading">Conference Expense Planner</h1>
              <p className="budget_sentence">
                Plan your next major event with us!
              </p>
            </div>
            <div className="col-12">
              <button
                onClick={() => handleGetStarted()}
                className="btn btn-primary get-started-btn"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-12">
              <AboutUs />
            </div>
          </div>
        </div>
      </header>

      <div className={`event-list-container ${showVenue ? 'visible' : ''}`}>
        <ConferenceEvent />
      </div>
    </>
  );
}

export default App;
