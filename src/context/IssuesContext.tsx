import axios from "axios";
import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { userAPI } from "../lib/axios";

interface ProfileProps {
  name: string
  login: string
  bio: string
  followers: string
  avatar_url: string
  html_url: string
}

interface IssueProps {
  title: string
  body: string
  id: number
  updated_at: string
  number: number
}

interface IssuesContextType {
  userData: ProfileProps[]
  fetchProfile: () => Promise<void>
  issues: IssueProps[]
  fetchIssues: (query?: string) => {}
}

interface IssuesProviderProps{
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({children}: IssuesProviderProps) {
  const [userData, setUserData] = useState<ProfileProps[]>([]);
  const [issues, setIssues] = useState<IssueProps[]>([])

  const fetchProfile = useCallback( async () => {
    userAPI.get('pedrohenrikle')
      .then(response => {
        const data = response.data;
        setUserData([data]);
      })
  }, [])

  const fetchIssues = useCallback( async (query?: string) => {
    axios.get(`https://api.github.com/search/issues`, {
      params: { q: `repo:pedrohenrikle/github-blog ${query}` },
    })
    .then(response => {
        const data = response.data;
        setIssues(data.items);

      })
  }, [])

  useEffect(() => {
    fetchProfile()
    fetchIssues('')
  }, [])

  return (
    <IssuesContext.Provider
      value={
        {userData, fetchProfile, issues, fetchIssues}
      }
    >
      {children}
    </IssuesContext.Provider>
  )

}