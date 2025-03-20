import React, { useState } from "react";
import "./App.css";
import PersonalInfoStep from "./components/PersonalInfoStep";
import NeedsAssessmentStep from "./components/NeedsAssessmentStep";
import OptionsStep from "./components/OptionsStep";
import DecisionStep from "./components/DecisionStep";
import FormPreparationStep from "./components/FormPreparationStep";
import SummaryStep from "./components/SummaryStep";

function App() {
  // משתני מצב עבור התהליך
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    fullName: "",
    idNumber: "",
    endDate: "",
    phone: "",
    email: "",
    // נתוני מערכת (יימשכו מה-API באפליקציה אמיתית)
    companyTenure: "3 שנים ו-6 חודשים",
    lastSalary: 12000,
    severanceAmount: 42000,
    severanceCompletion: 0,
    taxExemptAmount: 41250, // 13,750 * 3 שנים
  });

  const [needsConfirmed, setNeedsConfirmed] = useState({
    needsLiquidity: null,
    moneyPurpose: "",
    employmentPlans: "",
    ageGroup: "",
  });

  const [selectedOption, setSelectedOption] = useState("");
  const [formSent, setFormSent] = useState(false);
  const [wantsExplanation, setWantsExplanation] = useState(false);

  // פונקציה עזר לעדכון נתוני המשתמש
  const updateUserData = (field, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // פונקציה עזר לעדכון הערכת צרכים
  const updateNeeds = (field, value) => {
    setNeedsConfirmed((prevNeeds) => ({
      ...prevNeeds,
      [field]: value,
    }));
  };

  // פונקציה לקביעת אפשרויות מומלצות על סמך צרכי המשתמש
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

  // פונקציות ניווט
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // תוכן עבור כל שלב
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfoStep
            userData={userData}
            updateUserData={updateUserData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <NeedsAssessmentStep
            needsConfirmed={needsConfirmed}
            updateNeeds={updateNeeds}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <OptionsStep
            userData={userData}
            needsConfirmed={needsConfirmed}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <DecisionStep
            userData={userData}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 5:
        return (
          <FormPreparationStep
            userData={userData}
            selectedOption={selectedOption}
            setWantsExplanation={setWantsExplanation}
            setFormSent={setFormSent}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 6:
        return <SummaryStep userData={userData} selectedOption={selectedOption} />;
      default:
        return (
          <PersonalInfoStep
            userData={userData}
            updateUserData={updateUserData}
            nextStep={nextStep}
          />
        );
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="logo">
          <h1>Hanson Israel</h1>
          <p>Severance Pay Assistant</p>
        </div>
        <div className="progress-indicator">
          <div className={`progress-step ${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`progress-step ${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`progress-step ${step >= 3 ? "active" : ""}`}>3</div>
          <div className={`progress-step ${step >= 4 ? "active" : ""}`}>4</div>
          <div className={`progress-step ${step >= 5 ? "active" : ""}`}>5</div>
          <div className={`progress-step ${step >= 6 ? "active" : ""}`}>6</div>
        </div>
      </header>

      <main className="app-main">{renderStep()}</main>

      <footer className="app-footer">
        <p>
          &copy; {new Date().getFullYear()} Hanson Israel. All rights reserved.
          | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
