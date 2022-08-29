import React, { useContext } from 'react';
import styles from './UserProfile.module.css';
import { ReposContextData } from '../../context/reposContext';
import { Repositories } from '../../components/Repositories/Repositories';
import { User } from '../../components/User/User';

type ProfileProps = {
  dataProfiles: any;
}

export function UserProfile() {

  const { dataProfiles }: ProfileProps = useContext(ReposContextData);

  return (
    <main className={styles.mainProfile}>
      <User  dataProfiles={dataProfiles} />
      <Repositories  dataProfiles={dataProfiles} />
    </main>
  );
}
