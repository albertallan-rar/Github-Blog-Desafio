import axios from "axios";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface UserData {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  html_url: string;
  followers: number;
}

interface Issue {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  user: {
    login: string;
  };
}

interface RepositoryContextType {
  userData: UserData | null;
  issues: Issue[];
  loading: boolean;
  error: string | null;
  searchIssues: (searchText: string) => Promise<void>;
}

const RepositoryContext = createContext<RepositoryContextType | undefined>(undefined);

export const useRepositoryContext = () => {
  const context = useContext(RepositoryContext);
  if (!context) {
    throw new Error("useRepositoryContext must be used within a RepositoryProvider");
  }
  return context;
};

interface RepositoryProviderProps {
  children: ReactNode;
}

export const RepositoryProvider: React.FC<RepositoryProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const [userResponse, issuesResponse] = await Promise.all([
        axios.get<UserData>("https://api.github.com/users/albertallan-rar"),
        axios.get<Issue[]>("https://api.github.com/repos/albertallan-rar/Github-Blog-Desafio/issues"),
      ]);

      setUserData(userResponse.data);
      setIssues(issuesResponse.data);
      setLoading(false);
    } catch (err) {
      setError("Erro ao buscar dados do usuário ou issues");
      setLoading(false);
    }
  };

  const searchIssues = async (searchText: string) => {
    setLoading(true);
    setError(null);
    try {
      const query = encodeURIComponent(`${searchText} repo:albertallan-rar/Github-Blog-Desafio`);
      const response = await axios.get<{ items: Issue[] }>(`https://api.github.com/search/issues?q=${query}`);
      setIssues(response.data.items);
    } catch (err) {
      setError("Erro ao pesquisar issues");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RepositoryContext.Provider value={{ userData, issues, loading, error, searchIssues }}>
      {children}
    </RepositoryContext.Provider>
  );
};
