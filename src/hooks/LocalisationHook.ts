import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import { LocalisationKeyValue } from "../entities/Localisation";

export default function useLocalize(): (key: string) => string {
  //ToDo: need cache?
  const language = useSelector<RootState, string>(state => state.language);
  const localisation = useSelector<RootState, LocalisationKeyValue>(state => state.localisation[language]);

  return (!localisation)
    ? (key: string) => key
    : (key: string) => localisation[key] || key;
}