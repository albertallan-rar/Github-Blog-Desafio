import axios from "axios";
import React, { createContext, useCallback, useContext, useState } from "react";

interface IssueDetails {
  title: string;
  body: string;
  html_url: string;
  user: {
    login: string;
  };
  created_at: string;
  comments: number;
}

interface IssueDetailsContextData {
  issueDetails: IssueDetails | null;
  loading: boolean;
  error: string | null;
  fetchIssueDetails: (issueNumber: number) => Promise<void>;
}

const IssueDetailsContext = createContext<IssueDetailsContextData>({} as IssueDetailsContextData);

export const IssueDetailsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [issueDetails, setIssueDetails] = useState<IssueDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchIssueDetails = useCallback(async (issueNumber: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<IssueDetails>(
        `https://api.github.com/repos/albertallan-rar/Github-Blog-Desafio/issues/${issueNumber}`,
      );
      setIssueDetails(response.data);
    } catch (err) {
      setError("Erro ao buscar detalhes da issue");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <IssueDetailsContext.Provider
      value={{
        issueDetails,
        loading,
        error,
        fetchIssueDetails,
      }}
    >
      {children}
    </IssueDetailsContext.Provider>
  );
};

export function useIssueDetails(): IssueDetailsContextData {
  const context = useContext(IssueDetailsContext);

  if (!context) {
    throw new Error("useIssueDetails must be used within an IssueDetailsProvider");
  }

  return context;
}
