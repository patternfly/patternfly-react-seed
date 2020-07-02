import * as React from 'react';

export const useDocumentTitle = (title: string): void =>
  React.useEffect(() => {
    const originalTitle: string = document.title; 
    document.title = title; 
    return () => {
      document.title = originalTitle;
    }
  }, [title]);