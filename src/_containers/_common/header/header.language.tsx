import i18n, { changeLanguage } from "../../../language/i18n.tsx";
import { useState } from "react";

const HeaderLanguage = () => {
  const [language, setLanguage] = useState<string>(i18n.language);
  const onClickChangeLanguage = (lng: string) => {
    setLanguage(lng);
    changeLanguage(lng);
  };

  return (
    <li>
      <a>
        {language === "en" ? (
          <img src="/images/icon-en.png" alt="" />
        ) : (
          <img src="/images/icon-kr.png" alt="" />
        )}
      </a>
      <ul id="submenu">
        <li onClick={() => onClickChangeLanguage("en")}>
          <a>
            <img src="/images/icon-en.png" alt="" />
            English
          </a>
        </li>
        <li onClick={() => onClickChangeLanguage("ko")}>
          <a>
            <img src="/images/icon-kr.png" alt="" />
            한국어
          </a>
        </li>
      </ul>
    </li>
  );
};

export default HeaderLanguage;