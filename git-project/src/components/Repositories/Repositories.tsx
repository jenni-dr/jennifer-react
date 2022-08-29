import axios from 'axios';
import { GitFork, Scales } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';
import style from './Repositories.module.css';
import { Status } from "./styles";
import moment from "moment";

type ReposProps = {
  dataProfiles: {
    public_repos: number;
  };
};

type RepoMapProps = {
  name: string;
  html_url: string;
  language: string;
  forks_count: number;
  license: string;
  description: string;
  topics: string;
  forks: string;
  updated_at: Date;
}



export function Repositories({ dataProfiles }: ReposProps) {
  const [repositories, setRepositories] = useState([]);

  const pathParams = useParams();

  const getRepositories = async () => {
    const response = await axios
      .get(`${BASE_URL}/${pathParams.repos}/repos`);
    setRepositories(response.data);
  };

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <section>
      <header>
        <svg
          aria-hidden="true"
          height="30"
          viewBox="0 0 16 16"
          version="1.1"
          width="30"
          fill="#ffffff"
          data-view-component="true"
          className="octicon octicon-repo UnderlineNav-octicon hide-lg"
        >
          <path
            fill-rule="evenodd"
            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
          ></path>
        </svg>
        <h2 className={style.titleRepos}>
          Repositories &nbsp;<span className={style.searchSpan}>{dataProfiles.public_repos}</span>{" "}
        </h2>
      </header>
      <nav>
        {repositories.map((repo: RepoMapProps) => (
          <main key={repo.name}>
            <h3>
              <a href={repo.html_url}>{repo.name}</a>
            </h3>

            <div>
            {repo.language === "TypeScript" && (
                <Status statusColor="blue"></Status>
              )}
              {repo.language === "JavaScript" && (
                <Status statusColor="yellow"></Status>
              )}
              {repo.language === "HTML" && <Status statusColor="red"></Status>}
              {repo.language === "GDScript" && (
                <Status statusColor="gray"></Status>
              )}
              {repo.language === "Rust" && <Status statusColor="pink"></Status>}
              {repo.language === "PHP" && <Status statusColor="blue"></Status>}
              <p>{repo.language && <li>{repo.language}</li>}</p>
            </div>
            <div>

              {repo.forks_count > 0 && (
                <>
                  <p>
                    <GitFork size={16} color="#ffffff" /> &nbsp; {repo.forks_count} &nbsp;&nbsp;
                  </p>
                </>
              )}

              {repo.license && (
                <>
                  <p>
                    {" "}
                    <Scales size={20} color="#ffffff" /> {repo.license}
                  </p>
                </>
              )}

              <p> Update on
                {' '} &nbsp; {moment(repo.updated_at).format("DD MMM YYYY")}</p>
            </div>
            <hr />
          </main>
        ))}
      </nav>
    </section>
  );
}



