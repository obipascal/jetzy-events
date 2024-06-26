const baseUrl = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "http://localhost:3000"
const scheme = process.env.NODE_ENV === "development" ? "http" : "https"

export const ROUTES = {
  // ----------------- Auth Routes -----------------
  create: `/signup`,
  login: `/login`,

  // ----------------- Dashboard  Routes -----------------
  dashboard: {
    index: "/console",
    events: {
      create: "/console/events",
      edit: "/console/events/:slug/edit",
    },
  },

  // ----------------- Public Routes -----------------
  events: {
    fetch: "/events/:slug",
    bookTicket: "/events/:slug/tickets",
    buyTicket: "/events/:slug/buyticket",
  },
}
