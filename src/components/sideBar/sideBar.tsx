import React, { FC } from 'react';
import SearchBar from '../searchBar/searchBar';
import cl from './sideBar.module.css';
import MySelect from '../select/MySelect';
import MyButton from '../button/myButton';

interface ISideBarProps {
  name: string;
  setName: (value: string) => void;
  setPage: (page: number) => void;
  status: string | null;
  setStatus: (status: string) => void;
  gender: string | null;
  setGender: (gender: string) => void;
  resetForm: () => void;
}

const SideBar: FC<ISideBarProps> = ({
  name,
  setName,
  setPage,
  status,
  setStatus,
  gender,
  setGender,
  resetForm,
}) => {
  const statusOptions = ['alive', 'dead', 'unknown'];
  const genderOptions = ['male', 'female', 'unknown', 'genderless'];
  return (
    <div className={cl.sideBar}>
      <SearchBar title="Name" value={name} setValue={setName} setPage={setPage} />
      <MySelect title="Status" options={statusOptions} value={status} setValue={setStatus} />
      <MySelect title="Gender" options={genderOptions} value={gender} setValue={setGender} />
      <MyButton onClick={resetForm}>Reset</MyButton>
    </div>
  );
};

export default SideBar;
