import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { resolveSearchTarget } from "../services/catalogService";

export function useCatalogSearch(initialQuery = "") {
  const navigate = useNavigate();
  const [query, setQuery] = useState(initialQuery);

  const submit = (event?: FormEvent) => {
    event?.preventDefault();
    navigate(resolveSearchTarget(query));
  };

  return { query, setQuery, submit };
}
