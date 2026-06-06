import { Navigate, useParams } from "react-router";
import { DEFAULT_CATEGORY_SLUG } from "../data/catalogConfig";
import { LEGACY_CATEGORY_REDIRECTS, ROUTES } from "./paths";

export function LegacyCategoryRedirect() {
  const { legacySlug = "" } = useParams<{ legacySlug: string }>();
  const mappedSlug =
    LEGACY_CATEGORY_REDIRECTS[legacySlug] ?? DEFAULT_CATEGORY_SLUG;

  return <Navigate to={ROUTES.servicesByCategory(mappedSlug)} replace />;
}
