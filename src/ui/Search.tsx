import { SearchNormal1 } from "iconsax-react";
import { FC, FormEvent } from "react";

const Search: FC = () => {
  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="relative" onSubmit={formSubmit}>
      <button className="absolute right-0 top-0 mr-4 h-full flex items-center">
        <SearchNormal1 size="24" color="var(--color-primary-main)" />
      </button>
      <input
        type="text"
        name="search"
        placeholder="جستجو"
        autoComplete="off"
        className="textField__input pr-12 border border-neutral-400 rounded-2xl bg-neutral-100 
        focus:caret-primary-main focus:shadow-neutral-200 focus:bg-neutral-white"
      />
    </form>
  );
}

export default Search;
