"use client"

import { useAuth } from "@/hooks/use-auth"
import { useFetchDocument } from "@/hooks/use-fetch-document"
import { Card } from "@/components/settings/card"
import { CustomerRetention } from "@/components/settings/customer-retention"
import { Details } from "@/components/settings/details"
import { LoyaltyCard } from "@/components/settings/loyalty-card"
import { Rewards } from "@/components/settings/rewards"
import { Social } from "@/components/settings/socials"

export default function Page() {
  const { uid } = useAuth()
  const { data, loading, error } = useFetchDocument({
    collection: "merchants",
    document: uid!,
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  console.log("data init", data)

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-9">
            <div className="col-span-3">
              <Details name={data.name} address={data.address} />
            </div>
            <div className="col-span-3">
              <Card
                title="Customer retention"
                description="Configure how we should handle customer retention."
              >
                <CustomerRetention />
              </Card>
            </div>
            <div className="col-span-3">
              <Card
                title="Rewards"
                description="Keep your customers coming back, with random rewards
                    throughout the month."
              >
                <Rewards />
              </Card>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-9">
            <div className="col-span-3">
              <Card
                title="Loyalty card"
                description="Configure your loyalty card."
              >
                <LoyaltyCard />
              </Card>
            </div>
            <div className="col-span-3">
              <Card title="Socials">
                <Social />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
