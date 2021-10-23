import { useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc'

import { api } from '../../services/api';

import styles from './styles.module.scss';

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}

export function LoginBox() {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=a60e04c4b103e62518e5`;

  async function signIn(githubCode: string) {
    const response = await api.post<AuthResponse>('authenticate', { code: githubCode, })

    const { token, user } = response.data;

    localStorage.setItem('@dowhile:token', token);
  }

  useEffect(() => {
    const url = window.location.href

    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=')

      window.history.pushState({}, '', urlWithoutCode);

      signIn(githubCode);
    }
  }, []);

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Sign in and share your message</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Log in with GitHub.
      </a>
    </div>
  )
}