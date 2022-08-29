import styles from './SearchProfile.module.css'
import { BASE_URL } from '../../constants/urls';
import { GithubLogo, MagnifyingGlass } from 'phosphor-react'
import { useState,useContext, FormEvent } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ReposContextData } from '../../context/reposContext';


export function SearchProfile() {

    const [username, setUserName] = useState("");
    const [emptyInput, setEmptyInput] = useState(false);
    const [invalidUser, setInvalidUser] = useState(false);

    const navigate = useNavigate();
    const { setDataProfiles } = useContext(ReposContextData);


    const handleNotFoundUser = () => {
        setUserName("");
        setInvalidUser(true);
    };

    const handleSearch = (event: FormEvent) => {
        event?.preventDefault()
        axios
            .get(`${BASE_URL}/${username}`)
            .then((res) => {
                setUserName(res.data.login);
                setDataProfiles(res.data);
                navigate(`/profile/${username}`);
                setUserName("");
            })
            .catch((err) => {
                handleNotFoundUser();
            });
    };

    const handleVerifyImput = (event: any) => {
        if (username === "") {
            setInvalidUser(false);
            return setEmptyInput(true);
        }
        return handleSearch(event);
    };

    const handleonChangeButton = (event: any) => {
        setEmptyInput(false);
        setInvalidUser(false);
        setUserName(event.target.value);
    };


    return (
        <div className={styles.wrapper}>
            <main className={styles.content}>
                <div className={styles.searchForm}>
                    <span className={styles.searchSpan}>
                        <GithubLogo size={32} color="#ffffff" />
                        Buscar Repositorio no gitbub
                    </span>
                    <section className={styles.searchHeader}>
                        <form>
                            <input
                                placeholder="digite o nome do usuário"
                                type="text"
                                value={username}
                                required
                                onChange={(e) => handleonChangeButton(e)}
                                className={styles.searchInputNewSearch}
                            />
                            <button
                                onClick={handleVerifyImput}
                                type="submit"
                                className={styles.searchButtonNewSearch}>
                                <MagnifyingGlass size={32} /> Buscar
                            </button>
                        </form>
                        {emptyInput && (
                            <h4 className="text-center mt-2 ;">
                                informe um nome de usuário válido do github
                            </h4>
                        )}
                        {invalidUser && (
                            <h4 className="text-center mt-2">
                                Usuário não encontrado no github. Verifique se você digitou o nome
                                corretamente
                            </h4>
                        )}
                    </section>
                </div>
            </main>
        </div>
    )
}