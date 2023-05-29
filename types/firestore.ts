interface ILoyaltyCard {
  number_of_stamps: number
  prize: string
}

interface ICustomerRentention {
  retention_notification: string
  threshold_days: number
}

interface IRandomPrize {
  frequnecy_days: number
  prize: string
}

interface ISocial {
  instagram: string
  twitter: string
}

export interface IFirestore {
  address?: string
  name?: string
  card?: ILoyaltyCard
  customer_retention?: ICustomerRentention
  random_prize?: IRandomPrize
  social?: ISocial
}
