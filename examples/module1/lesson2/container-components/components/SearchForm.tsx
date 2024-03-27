import { Dispatch, SetStateAction } from 'react';
import NameField from './NameField';
import GenderSelect from './GenderSelect';
import SortSelect from './SortSelect';

type SearchFormProps = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
  sortOption: string;
  setSortOption: Dispatch<SetStateAction<string>>;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <NameField name={name} setName={setName} />
      <GenderSelect gender={gender} setGender={setGender} />
      <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
    </form>
  );
}

export default SearchForm;
