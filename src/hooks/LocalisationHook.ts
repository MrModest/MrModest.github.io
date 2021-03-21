import {useTypedSelector} from "../reducers";

export default function useLocalize(): (key: string) => string {
  //ToDo: need cache?
  const language = useTypedSelector(state => state.language);
  const localisation = useTypedSelector(state => state.localisation[language]);

  return (!localisation)
    ? (key: string) => key
    : (key: string) => localisation[key] || key;
}