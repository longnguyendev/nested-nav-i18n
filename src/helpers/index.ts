import i18n from "../i18n";

export const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("change")
    const lang_code = e.target.value;
    console.log(lang_code)
    i18n.changeLanguage(lang_code);
    localStorage.setItem('lang', lang_code)
  };