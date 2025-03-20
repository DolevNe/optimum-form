import React from "react";

const SummaryStep = ({ userData, selectedOption }) => {
  return (
    <div className="step-container">
      <h2>Step 6: Summary</h2>

      <div className="summary-container">
        <div className="thank-you-message">
          <h3>
            Thank you for using the Hanson Israel Severance Pay Assistant!
          </h3>

          <div className="summary-details">
            <p>
              <strong>Summary:</strong>
            </p>
            {selectedOption === "withdraw-all" && (
              <p>- You chose: Withdraw all severance pay</p>
            )}
            {selectedOption === "partial-withdraw" && (
              <p>- You chose: Partial withdrawal and pension continuity</p>
            )}
            {selectedOption === "pension-continuity" && (
              <p>- You chose: Pension continuity for the entire amount</p>
            )}
            {selectedOption === "severance-continuity" && (
              <p>- You chose: Severance continuity (employer continuity)</p>
            )}
            {selectedOption === "need-advisor" && (
              <p>- You chose: Speak with a human advisor</p>
            )}

            {selectedOption !== "need-advisor" && (
              <>
                <p>- Form 161 (Part B) has been sent to your email address</p>
                <p>- Print, sign, and submit to your employer</p>
              </>
            )}
          </div>

          <div className="satisfaction-question">
            <p>Were you satisfied with the service you received today?</p>
            <div className="rating-buttons">
              <button className="rating-button">😞</button>
              <button className="rating-button">😐</button>
              <button className="rating-button">🙂</button>
              <button className="rating-button">😀</button>
              <button className="rating-button">😍</button>
            </div>
          </div>

          <div className="final-message">
            <p>
              Thank you for reaching out to us. If you have any further
              questions in the future, don't hesitate to contact us again.
            </p>
            <p>Have a wonderful day!</p>
          </div>

          <button
            className="restart-button"
            onClick={() => window.location.reload()}
          >
            Start New Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryStep;
