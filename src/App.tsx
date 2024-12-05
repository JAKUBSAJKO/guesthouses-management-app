import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <div>
        <button onClick={() => changeLanguage("pl")} disabled={currentLanguage === "pl"}>
          Polski
        </button>
        <button onClick={() => changeLanguage("en")} disabled={currentLanguage === "en"}>
          English
        </button>
      </div>
    </div>
  );
}

export default App;
