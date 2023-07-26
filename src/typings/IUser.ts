export interface IUser {
  userID: string
  email: string
  username: string
  displayName: string
  avatar: string
  jwt: string
  apiUsage: number
  apiLimit: number
  subscriptionType: string
  subscriptionStatus: string
  subscriptionEndDate: number
}