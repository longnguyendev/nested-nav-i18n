import i18n from "../i18n";

export const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const lang_code = e.target.value;
  i18n.changeLanguage(lang_code);
  localStorage.setItem("lang", lang_code);
};
