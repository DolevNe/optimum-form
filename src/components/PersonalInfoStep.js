import React from "react";

const PersonalInfoStep = ({ userData, updateUserData, nextStep }) => {
  return (
    <div className="step-container">
      <h2>שלב 1: פרטים אישיים</h2>
      <div className="welcome-message">
        <p>שלום! 👋</p>
        <p>
          ברוכים הבאים לעוזר כספי הפיצויים של הנסון ישראל. מערכת זו תעזור לך
          לטפל בכספי הפיצויים שלך לאחר סיום העסקתך.
        </p>
        <p>
          המערכת תשאל אותך מספר שאלות כדי להבין את מצבך ולהציג בפניך אפשרויות
          רלוונטיות. כל המידע שתמסור מאובטח ומשמש רק לצורך הטיפול בכספי
          הפיצויים שלך.
        </p>
      </div>

      <div className="form-container">
        <div className="form-group">
          <label>שם מלא:</label>
          <input
            type="text"
            value={userData.fullName}
            onChange={(e) => updateUserData("fullName", e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>מספר תעודת זהות:</label>
          <input
            type="text"
            value={userData.idNumber}
            onChange={(e) => updateUserData("idNumber", e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>תאריך סיום העסקה:</label>
          <input
            type="date"
            value={userData.endDate}
            onChange={(e) => updateUserData("endDate", e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>מספר טלפון:</label>
          <input
            type="tel"
            value={userData.phone}
            onChange={(e) => updateUserData("phone", e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>כתובת דוא״ל:</label>
          <input
            type="email"
            value={userData.email}
            onChange={(e) => updateUserData("email", e.target.value)}
            required
          />
        </div>
      </div>

      {userData.fullName &&
        userData.idNumber &&
        userData.endDate &&
        userData.phone &&
        userData.email && (
          <div className="system-data">
            <h3>נתוני מערכת:</h3>
            <p>ותק בחברה: {userData.companyTenure}</p>
            <p>משכורת אחרונה: {userData.lastSalary.toLocaleString()} ₪</p>
            <p>
              סכום פיצויים בקופה: {userData.severanceAmount.toLocaleString()}{" "}
              ₪
            </p>
            {userData.severanceCompletion > 0 && (
              <p>
                השלמת פיצויים ע״י המעסיק:{" "}
                {userData.severanceCompletion.toLocaleString()} ₪
              </p>
            )}
            <p>סכום פטור ממס: {userData.taxExemptAmount.toLocaleString()} ₪</p>

            <div className="confirmation">
              <p>האם המידע הזה נכון?</p>
              <div className="button-group">
                <button onClick={nextStep} className="primary-button">
                  כן, המשך
                </button>
                <button className="secondary-button">לא, יש טעות</button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default PersonalInfoStep;
