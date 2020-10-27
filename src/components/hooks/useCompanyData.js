import { useState, useEffect } from "react";

const apiUrl = `https://takehomedata.dokku.railslabs.com/companies.json`;

const useCompanyData = () => {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((companies) => {
        setCompanies(companies);
        setLoading(false);
      });
  }, [setLoading, setCompanies]);
  return { companies, loading };
};

export default useCompanyData;
