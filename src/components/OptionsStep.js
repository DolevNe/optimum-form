import React from "react";

const OptionsStep = ({ userData, needsConfirmed, nextStep, prevStep }) => {
  const getRecommendedOptions = () => {
    if (needsConfirmed.needsLiquidity) {
      return "immediate-funds";
    } else if (
      needsConfirmed.employmentPlans === "new-job" ||
      needsConfirmed.employmentPlans === "recruiting"
    ) {
      return "new-job-soon";
    } else if (
      needsConfirmed.ageGroup === "51-60" ||
      needsConfirmed.ageGroup === "61+"
    ) {
      return "close-to-retirement";
    } else {
      return "standard";
    }
  };

  const recommendationType = getRecommendedOptions();

  return (
    <div className="step-container">
      <h2>שלב 3: האפשרויות המותאמות אישית שלך</h2>

      {recommendationType === "immediate-funds" && (
        <div className="options-card">
          <h3>בהתבסס על הצרכים שלך, הנה האפשרויות העומדות בפניך:</h3>

          <div className="option-box">
            <h4>אפשרות 1: משיכת כל כספי הפיצויים</h4>
            <ul>
              <li>
                סכום מוערך לקבלה: {userData.severanceAmount.toLocaleString()}{" "}
                ₪
              </li>
              <li>
                חלק פטור ממס: {userData.taxExemptAmount.toLocaleString()} ₪
              </li>
              <li>
                סכום החייב במס:{" "}
                {(
                  userData.severanceAmount - userData.taxExemptAmount
                ).toLocaleString()}{" "}
                ₪
              </li>
              <li>
                מס מוערך (בשיעור 25%):{" "}
                {(
                  (userData.severanceAmount - userData.taxExemptAmount) *
                  0.25
                ).toLocaleString()}{" "}
                ₪
              </li>
            </ul>
          </div>

          <div className="option-box">
            <h4>אפשרות 2: משיכה חלקית (רק הסכום הפטור ממס)</h4>
            <ul>
              <li>
                סכום למשיכה (פטור ממס):{" "}
                {userData.taxExemptAmount.toLocaleString()} ₪
              </li>
              <li>
                סכום להשאיר ברצף קצבה:{" "}
                {(
                  userData.severanceAmount - userData.taxExemptAmount
                ).toLocaleString()}{" "}
                ₪
              </li>
            </ul>
            <div className="warning-note">
              חשוב לדעת: משיכת כספי פיצויים בפטור ממס תשפיע על הפטור ממס
              העתידי שלך על קצבת הפרישה.
            </div>
          </div>
        </div>
      )}

      {recommendationType === "new-job-soon" && (
        <div className="options-card">
          <h3>בהתבסס על הצרכים שלך, הנה האפשרויות העומדות בפניך:</h3>

          <div className="option-box">
            <h4>אפשרות 1: רצף פיצויים (רצף מעסיקים)</h4>
            <ul>
              <li>דחיית ההתחשבנות המס למועד עתידי</li>
              <li>יתרון בעיקר אם השכר שלך צפוי לעלות</li>
              <li>חשוב: עליך למצוא מעסיק חדש שיפקיד כספי פיצויים בתוך שנה</li>
            </ul>
          </div>

          <div className="option-box">
            <h4>אפשרות 2: רצף קצבה</h4>
            <ul>
              <li>
                הכספים ({userData.severanceAmount.toLocaleString()} ₪) ישמשו
                להגדלת קצבת הפנסיה העתידית שלך
              </li>
              <li>
                אפשרות להמיר בעתיד את הפטור ממס על הפיצויים לפטור על קצבה
              </li>
            </ul>
          </div>

          <div className="option-box">
            <h4>אפשרות 3: שילוב</h4>
            <ul>
              <li>
                משיכת חלק מהכספים (עד הסכום הפטור ממס):{" "}
                {userData.taxExemptAmount.toLocaleString()} ₪
              </li>
              <li>
                השארת היתרה ברצף קצבה:{" "}
                {(
                  userData.severanceAmount - userData.taxExemptAmount
                ).toLocaleString()}{" "}
                ₪
              </li>
            </ul>
          </div>
        </div>
      )}

      {recommendationType === "close-to-retirement" && (
        <div className="options-card">
          <h3>בהתבסס על הצרכים שלך, הנה האפשרויות העומדות בפניך:</h3>

          <div className="option-box">
            <h4>אפשרות 1: רצף קצבה</h4>
            <ul>
              <li>הכספים ישמשו להגדלת קצבת הפנסיה הצפויה שלך</li>
              <li>
                אפשרות להמיר בעתיד את הפטור ממס על הפיצויים לפטור על קצבה
              </li>
              <li>יתרון: תוכל לקבל קצבה חודשית גבוהה יותר</li>
            </ul>
          </div>

          <div className="option-box">
            <h4>אפשרות 2: משיכת הכספים בפטור ממס</h4>
            <ul>
              <li>
                סכום פטור ממס: {userData.taxExemptAmount.toLocaleString()} ₪
              </li>
              <li>חשוב לקחת בחשבון את ההשפעה על הפטור העתידי מקצבת הפנסיה</li>
            </ul>
          </div>
        </div>
      )}

      {recommendationType === "standard" && (
        <div className="options-card">
          <h3>בהתבסס על הצרכים שלך, הנה האפשרויות העומדות בפניך:</h3>

          <div className="option-box">
            <h4>אפשרות 1: משיכת כל כספי הפיצויים</h4>
            <ul>
              <li>
                סכום מוערך לקבלה: {userData.severanceAmount.toLocaleString()}{" "}
                ₪
              </li>
              <li>
                חלק פטור ממס: {userData.taxExemptAmount.toLocaleString()} ₪
              </li>
              <li>
                סכום החייב במס:{" "}
                {(
                  userData.severanceAmount - userData.taxExemptAmount
                ).toLocaleString()}{" "}
                ₪
              </li>
            </ul>
          </div>

          <div className="option-box">
            <h4>אפשרות 2: רצף קצבה</h4>
            <ul>
              <li>הכספים ישמשו להגדלת קצבת הפנסיה העתידית שלך</li>
              <li>זה יעניק לך קצבה חודשית גבוהה יותר כשתפרוש</li>
            </ul>
          </div>

          <div className="option-box">
            <h4>אפשרות 3: משיכה חלקית</h4>
            <ul>
              <li>
                משיכת חלק מהכספים (עד הסכום הפטור ממס):{" "}
                {userData.taxExemptAmount.toLocaleString()} ₪
              </li>
              <li>
                השארת היתרה ברצף קצבה:{" "}
                {(
                  userData.severanceAmount - userData.taxExemptAmount
                ).toLocaleString()}{" "}
                ₪
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="navigation-buttons">
        <button onClick={prevStep} className="secondary-button">
          חזרה
        </button>
        <button onClick={nextStep} className="primary-button">
          המשך לבחירה
        </button>
      </div>
    </div>
  );
};

export default OptionsStep;
