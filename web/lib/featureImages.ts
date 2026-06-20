export const featureImages = {
  fleet: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781924855/fleet-management.png",
    alt: "CarRental.digital fleet management dashboard",
  },
  booking: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781924825/booking-management.png",
    alt: "CarRental.digital booking management dashboard",
  },
  crm: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781924800/customer-management.png",
    alt: "CarRental.digital customer management dashboard",
  },
  contracts: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781924863/contracts-e-signatures.png",
    alt: "CarRental.digital contracts and e-signatures dashboard",
  },
  payments: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781924791/payments-invoices.png",
    alt: "CarRental.digital payments and invoices dashboard",
  },
  analytics: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781924817/reports-analytics.png",
    alt: "CarRental.digital reports and analytics dashboard",
  },
  locations: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781924832/multi-location-multi-brand.png",
    alt: "CarRental.digital multi-location and multi-brand dashboard",
  },
  notifications: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781924808/automation-notifications.png",
    alt: "CarRental.digital automation and notifications dashboard",
  },
  "email-automation": {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781924871/email-automation.png",
    alt: "CarRental.digital email automation dashboard",
  },
} as const;

export type FeatureImageId = keyof typeof featureImages;

