import React from "react";

const FormPreparationStep = ({
  userData,
  selectedOption,
  setWantsExplanation,
  setFormSent,
  nextStep,
  prevStep,
}) => {
  // Define the missing formSent variable
  const formSent = false; // or true, depending on the logic

  return (
    <div className="step-container">
      <h2>שלב 5: הכנת טופס והנחיות להמשך</h2>
      <div className="form-preparation">
        <div className="success-message">
          <p>מצוין! הכנתי עבורך את טופס 161 (חלק ב') בהתאם לבחירתך:</p>
          {selectedOption === "withdraw-all" && <p>משיכת כל כספי הפיצויים</p>}
          {selectedOption === "partial-withdraw" && (
            <p>משיכה חלקית ורצף קצבה</p>
          )}
          {selectedOption === "pension-continuity" && (
            <p>רצף קצבה על כל הסכום</p>
          )}
          {selectedOption === "severance-continuity" && (
            <p>רצף פיצויים (רצף מעסיקים)</p>
          )}

          <p>הטופס יישלח לכתובת האימייל שלך: {userData.email}</p>

          <div className="next-steps">
            <h3>הצעדים הבאים:</h3>
            <ol>
              <li>עליך להדפיס את הטופס ולחתום עליו</li>
              <li>להעביר את הטופס החתום למעסיק (הנסון ישראל)</li>
              <li>המעסיק יחתום על הטופס ויחזיר אליך עותק חתום</li>
              <li>
                עם הטופס החתום, תוכל לפנות לקרן הפנסיה שלך למימוש ההחלטה
              </li>
            </ol>
          </div>

          <p>
            האם אתה רוצה לקבל גם הסבר מפורט יותר על ההחלטה שקיבלת ועל
            השלכותיה?
          </p>

          <div className="button-group">
            <button
              onClick={() => {
                setWantsExplanation(true);
                setFormSent(true);
              }}
              className="primary-button"
            >
              כן, אשמח לקבל הסבר מפורט
            </button>
            <button
              onClick={() => {
                setWantsExplanation(false);
                setFormSent(true);
              }}
              className="secondary-button"
            >
              לא, ההסבר מספק
            </button>
          </div>
        </div>
      </div>
      {formSent && (
        <div className="navigation-buttons">
          <button onClick={prevStep} className="secondary-button">
            חזרה
          </button>
          <button onClick={nextStep} className="primary-button">
            המשך
          </button>
        </div>
      )}
    </div>
  );
};

export default FormPreparationStep;
