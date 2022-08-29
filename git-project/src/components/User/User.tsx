import { Buildings, EnvelopeSimple, LinkSimple, MapPin, Star, Users } from 'phosphor-react';
import styles from './User.module.css';

type ProfilesProps = {
  dataProfiles: {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    blog: string;
    username: string;
    email: string;
    location: string;
    following: number;
    followers: number;
    twitterUsername: string;
    company: string;
    public_gists: number;
  };
};

export function User({ dataProfiles }: ProfilesProps) {


  return (
    <aside className={styles.userProfile}>
      <img src={dataProfiles.avatar_url} alt="user profile" />
      <article className={styles.articleProfile}>
        <h2 className={styles.userName}>{dataProfiles.name}</h2>
        <h4>{dataProfiles.login}</h4>
        <button className={styles.userButton}>Follow</button>
        <h5>{dataProfiles.bio}</h5>
        <div>
          <p className={styles.userFollwing} data-testid="following">
            <Users size={20} color="#ffffff" />&nbsp;
            <b>{dataProfiles.following}</b>&nbsp;
            {' '}
            following
          </p>
          <p className={styles.userFollwing} data-testid="followers"> &nbsp;
            <b> •{dataProfiles.followers}</b>&nbsp;
            {' '}
            followers
          </p> &nbsp;
          • &nbsp;<Star size={20} color="#ffffff" />&nbsp;
        </div>
        <p className={styles.userStatus}> <LinkSimple size={20} color="#ffffff" /> {dataProfiles.blog}</p>
        {dataProfiles.twitterUsername && (
          <p className={styles.userStatus}>
            @
            {dataProfiles.twitterUsername}
          </p>
        )}
        <p className={styles.userStatus}>
          <Buildings size={20} color="#ffffff" />{dataProfiles.company}</p>
        <p className={styles.userStatus}><MapPin size={20} color="#ffffff" />{dataProfiles.location}</p>

        {dataProfiles.email && (<>
          <EnvelopeSimple size={20} color="#ffffff" />
          <p className={styles.userStatus}>{dataProfiles.email}</p>
        </>
        )}
      </article>
    </aside>
  );
}


