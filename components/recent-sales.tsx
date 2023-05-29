import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentSales({ matchingUsers }: any = []) {
  console.log("matchingUsers", matchingUsers)
  return (
    <div className="space-y-8">
      {matchingUsers.map((user: any) => (
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user?.image} alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{user?.username}</p>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
          <div className="ml-auto font-medium">+$1,999.00</div>
        </div>
      ))}
    </div>
  )
}
