interface ILoyaltyCard {
  count: number
  reward: string
}

interface ICustomerRentention {
  retention_notification: string
  threshold_days: number
}

interface IPerk {
  frequency_days: number
  value: string
}

interface ISocial {
  instagram: string
  twitter: string
}

export interface IFirestore {
  address?: string
  name?: string
  loyalty_card?: ILoyaltyCard
  customer_retention?: ICustomerRentention
  perk?: IPerk
  social?: ISocial
}
