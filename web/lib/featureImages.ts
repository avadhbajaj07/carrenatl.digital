export const featureImages = {
  fleet: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781938711/car-rental-digital/features/fleet-management.jpg",
    alt: "CarRental.digital fleet management dashboard",
  },
  booking: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781938722/car-rental-digital/features/booking-management.jpg",
    alt: "CarRental.digital booking management dashboard",
  },
  crm: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781938737/car-rental-digital/features/customer-management.jpg",
    alt: "CarRental.digital customer management dashboard",
  },
  contracts: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781938697/car-rental-digital/features/contracts-e-signatures.jpg",
    alt: "CarRental.digital contracts and e-signatures dashboard",
  },
  payments: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781938749/car-rental-digital/features/payments-invoices.jpg",
    alt: "CarRental.digital payments and invoices dashboard",
  },
  analytics: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781938685/car-rental-digital/features/reports-analytics.jpg",
    alt: "CarRental.digital reports and analytics dashboard",
  },
  locations: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781938640/car-rental-digital/features/multi-location-multi-brand.jpg",
    alt: "CarRental.digital multi-location and multi-brand dashboard",
  },
  notifications: {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781938761/car-rental-digital/features/automation-notifications.jpg",
    alt: "CarRental.digital automation and notifications dashboard",
  },
  "email-automation": {
    src: "https://res.cloudinary.com/dm4jfxbcs/image/upload/v1781938761/car-rental-digital/features/automation-notifications.jpg",
    alt: "CarRental.digital email automation dashboard",
  },
} as const;

export type FeatureImageId = keyof typeof featureImages;
