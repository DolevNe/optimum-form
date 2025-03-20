import React from "react";

const NeedsAssessmentStep = ({
  needsConfirmed,
  updateNeeds,
  nextStep,
  prevStep,
}) => {
  return (
    <div className="step-container">
      <h2>שלב 2: הבנת הצרכים שלך</h2>
      <p>מצוין! כעת אשאל אותך מספר שאלות כדי להבין טוב יותר את הצרכים שלך.</p>

      <div className="question-box">
        <h3>1. צורך בנזילות</h3>
        <p>האם אתה זקוק כרגע לסכום כסף חד פעמי?</p>
        <div className="options-container">
          <button
            className={
              needsConfirmed.needsLiquidity === true
                ? "option-selected"
                : "option"
            }
            onClick={() => updateNeeds("needsLiquidity", true)}
          >
            כן, אני זקוק לכסף כעת
          </button>
          <button
            className={
              needsConfirmed.needsLiquidity === false
                ? "option-selected"
                : "option"
            }
            onClick={() => updateNeeds("needsLiquidity", false)}
          >
            לא, איני זקוק לכסף כעת
          </button>
        </div>
      </div>

      {needsConfirmed.needsLiquidity === true && (
        <div className="question-box">
          <h3>2. מטרת השימוש בכסף</h3>
          <p>לאיזו מטרה אתה זקוק לכסף?</p>
          <div className="options-container">
            <button
              className={
                needsConfirmed.moneyPurpose === "home"
                  ? "option-selected"
                  : "option"
              }
              onClick={() => updateNeeds("moneyPurpose", "home")}
            >
              רכישת דירה/משכנתא
            </button>
            <button
              className={
                needsConfirmed.moneyPurpose === "debt"
                  ? "option-selected"
                  : "option"
              }
              onClick={() => updateNeeds("moneyPurpose", "debt")}
            >
              כיסוי חובות
            </button>
            <button
              className={
                needsConfirmed.moneyPurpose === "expense"
                  ? "option-selected"
                  : "option"
              }
              onClick={() => updateNeeds("moneyPurpose", "expense")}
            >
              הוצאה גדולה מתוכננת
            </button>
            <button
              className={
                needsConfirmed.moneyPurpose === "other"
                  ? "option-selected"
                  : "option"
              }
              onClick={() => updateNeeds("moneyPurpose", "other")}
            >
              אחר
            </button>
          </div>
        </div>
      )}

      <div className="question-box">
        <h3>3. תכניות תעסוקה</h3>
        <p>האם אתה מתכנן להתחיל לעבוד במקום עבודה חדש בקרוב?</p>
        <div className="options-container">
          <button
            className={
              needsConfirmed.employmentPlans === "new-job"
                ? "option-selected"
                : "option"
            }
            onClick={() => updateNeeds("employmentPlans", "new-job")}
          >
            כן, יש לי כבר עבודה חדשה
          </button>
          <button
            className={
              needsConfirmed.employmentPlans === "recruiting"
                ? "option-selected"
                : "option"
            }
            onClick={() => updateNeeds("employmentPlans", "recruiting")}
          >
            אני באמצע תהליכי גיוס
          </button>
          <button
            className={
              needsConfirmed.employmentPlans === "looking"
                ? "option-selected"
                : "option"
            }
            onClick={() => updateNeeds("employmentPlans", "looking")}
          >
            אני מחפש אבל עדיין לא מצאתי
          </button>
          <button
            className={
              needsConfirmed.employmentPlans === "not-looking"
                ? "option-selected"
                : "option"
            }
            onClick={() => updateNeeds("employmentPlans", "not-looking")}
          >
            לא, איני מחפש עבודה כרגע
          </button>
        </div>
      </div>

      <div className="question-box">
        <h3>4. גיל ותכנון פרישה</h3>
        <p>
          אם תוכל לשתף, מה הגיל שלך כיום, ואיך אתה רואה את תכנון הפרישה שלך?
        </p>
        <div className="options-container">
          <button
            className={
              needsConfirmed.ageGroup === "up-to-40"
                ? "option-selected"
                : "option"
            }
            onClick={() => updateNeeds("ageGroup", "up-to-40")}
          >
            עד 40, עדיין רחוק מפרישה
          </button>
          <button
            className={
              needsConfirmed.ageGroup === "41-50"
                ? "option-selected"
                : "option"
            }
            onClick={() => updateNeeds("ageGroup", "41-50")}
          >
            41-50, מתחיל לחשוב על הפרישה
          </button>
          <button
            className={
              needsConfirmed.ageGroup === "51-60"
                ? "option-selected"
                : "option"
            }
            onClick={() => updateNeeds("ageGroup", "51-60")}
          >
            51-60, מתכנן פרישה בעשור הקרוב
          </button>
          <button
            className={
              needsConfirmed.ageGroup === "61+" ? "option-selected" : "option"
            }
            onClick={() => updateNeeds("ageGroup", "61+")}
          >
            61+, קרוב לפרישה
          </button>
        </div>
      </div>

      {needsConfirmed.needsLiquidity !== null &&
        needsConfirmed.employmentPlans &&
        needsConfirmed.ageGroup && (
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

export default NeedsAssessmentStep;
