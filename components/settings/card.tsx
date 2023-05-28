import { Button } from "@/components/ui/button"
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as UiCard,
} from "@/components/ui/card"

interface CardProps {
  title: string
  description?: string
  children: React.ReactNode
}

export const Card = ({ title, description, children }: CardProps) => {
  return (
    <UiCard className="flex h-full flex-col justify-between">
      <div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent>{children}</CardContent>
      </div>
      <CardFooter className="ml-auto flex justify-between">
        <Button variant="outline" disabled={true}>
          Save
        </Button>
      </CardFooter>
    </UiCard>
  )
}
