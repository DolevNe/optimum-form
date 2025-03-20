import React from "react";

const DecisionStep = ({
  userData,
  selectedOption,
  setSelectedOption,
  nextStep,
  prevStep,
}) => {
  // Define the missing setStep function
  const setStep = (step) => {
    // Logic to set the current step
  };

  return (
    <div className="step-container">
      <h2>שלב 4: בחר את האפשרות המועדפת עליך</h2>
      <p>לאחר בחינת האפשרויות, בחר באפשרות המועדפת עליך:</p>

      <div className="decision-options">
        <button
          className={
            selectedOption === "withdraw-all" ? "option-selected" : "option"
          }
          onClick={() => setSelectedOption("withdraw-all")}
        >
          משיכת כל כספי הפיצויים
        </button>

        <button
          className={
            selectedOption === "partial-withdraw"
              ? "option-selected"
              : "option"
          }
          onClick={() => setSelectedOption("partial-withdraw")}
        >
          משיכה חלקית והשארת היתרה ברצף קצבה
        </button>

        <button
          className={
            selectedOption === "pension-continuity"
              ? "option-selected"
              : "option"
          }
          onClick={() => setSelectedOption("pension-continuity")}
        >
          רצף קצבה על כל הסכום
        </button>

        <button
          className={
            selectedOption === "severance-continuity"
              ? "option-selected"
              : "option"
          }
          onClick={() => setSelectedOption("severance-continuity")}
        >
          רצף פיצויים (רצף מעסיקים)
        </button>

        <button
          className={
            selectedOption === "need-advisor" ? "option-selected" : "option"
          }
          onClick={() => setSelectedOption("need-advisor")}
        >
          אני עדיין לא בטוח, אשמח לדבר עם יועץ אנושי
        </button>
      </div>

      {selectedOption && (
        <div className="decision-response">
          {selectedOption === "withdraw-all" && (
            <div className="response-box">
              <p>בחרת למשוך את כל כספי הפיצויים.</p>
              <p>
                סכום מוערך לקבלה: {userData.severanceAmount.toLocaleString()}{" "}
                ₪
              </p>
              <p>
                חלק פטור ממס: {userData.taxExemptAmount.toLocaleString()} ₪
              </p>
              <p>
                על היתרה (
                {(
                  userData.severanceAmount - userData.taxExemptAmount
                ).toLocaleString()}{" "}
                ₪) תשלם מס בשיעור 25%
              </p>
              <p>אני מכין עבורך את טופס 161 (חלק ב') בהתאם לבחירה זו.</p>
            </div>
          )}

          {selectedOption === "partial-withdraw" && (
            <div className="response-box">
              <p>
                בחרת במשיכה חלקית של כספי הפיצויים והשארת היתרה ברצף קצבה.
              </p>
              <p>
                סכום למשיכה: {userData.taxExemptAmount.toLocaleString()} ₪
                (פטור ממס)
              </p>
              <p>
                סכום שיישאר ברצף קצבה:{" "}
                {(
                  userData.severanceAmount - userData.taxExemptAmount
                ).toLocaleString()}{" "}
                ₪
              </p>
              <p>אני מכין עבורך את טופס 161 (חלק ב') בהתאם לבחירה זו.</p>
            </div>
          )}

          {selectedOption === "pension-continuity" && (
            <div className="response-box">
              <p>
                בחרת להשאיר את כל כספי הפיצויים (
                {userData.severanceAmount.toLocaleString()} ₪) ברצף קצבה.
              </p>
              <p>
                בחירה זו תגדיל את פנסיית הזקנה העתידית שלך ותאפשר לך בעתיד
                להמיר את הפטור ממס על הפיצויים לפטור על קצבה.
              </p>
              <p>אני מכין עבורך את טופס 161 (חלק ב') בהתאם לבחירה זו.</p>
            </div>
          )}

          {selectedOption === "severance-continuity" && (
            <div className="response-box">
              <p>בחרת באפשרות של רצף פיצויים (רצף מעסיקים).</p>
              <p>
                סכום הפיצויים ({userData.severanceAmount.toLocaleString()} ₪)
                יישאר בקופה, ותוכל למשוך אותו בעתיד בסיום עבודתך אצל המעסיק
                הבא או בפרישה.
              </p>
              <p>חשוב לזכור:</p>
              <ul>
                <li>עליך למצוא מעסיק חדש שיפקיד כספי פיצויים בתוך שנה</li>
                <li>אסור למשוך כספי פיצויים פטורים ממס בתקופה זו</li>
              </ul>
              <p>אני מכין עבורך את טופס 161 (חלק ב') בהתאם לבחירה זו.</p>
            </div>
          )}

          {selectedOption === "need-advisor" && (
            <div className="response-box">
              <p>אני מבין שאתה מעוניין לדבר עם יועץ אנושי לפני קבלת החלטה.</p>
              <p>יועץ פנסיוני יצור איתך קשר בהקדם במספר {userData.phone}.</p>
              <p>
                בינתיים, אשלח לך בדוא"ל מידע מפורט על האפשרויות השונות לטיפול
                בכספי הפיצויים.
              </p>
              <p>תודה על השימוש בשירות שלנו!</p>
            </div>
          )}
        </div>
      )}

      {selectedOption && selectedOption !== "need-advisor" && (
        <div className="navigation-buttons">
          <button onClick={prevStep} className="secondary-button">
            חזרה
          </button>
          <button onClick={nextStep} className="primary-button">
            המשך
          </button>
        </div>
      )}

      {selectedOption === "need-advisor" && (
        <div className="navigation-buttons">
          <button onClick={() => setStep(6)} className="primary-button">
            סיום
          </button>
        </div>
      )}
    </div>
  );
};

export default DecisionStep;
