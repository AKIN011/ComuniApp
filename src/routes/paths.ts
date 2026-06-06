import { DEFAULT_CATEGORY_SLUG } from "../data/catalogConfig";

export const ROUTES = {
  home: "/",
  login: "/login",
  loginEntrepreneur: "/login/emprendedor",
  forgotPassword: "/login/recuperar",
  dashboard: "/dashboard",
  serviceHistory: "/historial",
  register: "/registro",
  registerEntrepreneur: "/registro/emprendedor",
  registerEntrepreneurCreateProfile: "/registro/emprendedor/crear-perfil",
  registerCreateProfile: "/registro/crear-perfil",
  editProfile: "/perfil/editar",
  editProfileSuccess: "/perfil/editar/exito",
  servicesByCategory: (categorySlug: string) => `/services/${categorySlug}`,
  serviceDetail: (serviceSlug: string) => `/service/${serviceSlug}`,
  legacyCategory: (legacySlug: string) => `/categorias/${legacySlug}`,
  defaultServices: `/services/${DEFAULT_CATEGORY_SLUG}`,
  comingSoon: (category: string) =>
    `/proximamente?categoria=${encodeURIComponent(category)}`,
  privacy: "/legal/privacidad",
  help: "/ayuda",
  contact: "/contacto",
  terms: "/legal/terminos",
  sustainability: "/legal/sostenibilidad",
  entrepreneur: {
    tablero: "/emprendedor/tablero",
    servicios: "/emprendedor/servicios",
    crearServicio: "/emprendedor/servicios/crear",
    editarServicio: "/emprendedor/servicios/editar",
    editarPerfil: "/emprendedor/perfil/editar",
    /** @deprecated use crearServicio */
    crearServiciosLegacy: "/emprendedor/crear-servicios",
    /** @deprecated use servicios */
    editarServiciosLegacy: "/emprendedor/editar-servicios",
    /** @deprecated use editarPerfil */
    editarPerfilLegacy: "/emprendedor/editar-perfil",
  },
} as const;

export const EMPRENDEDOR_ROUTES = ROUTES.entrepreneur;

export const LEGACY_CATEGORY_REDIRECTS: Record<string, string> = {
  electricistas: DEFAULT_CATEGORY_SLUG,
};
