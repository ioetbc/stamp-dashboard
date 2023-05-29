"use client"

import { useAuth } from "@/hooks/use-auth"
import { useFetchDocument } from "@/hooks/use-fetch-document"
import { QrCode } from "@/components/qr-code"
import { CustomerRetention } from "@/components/settings/customer-retention"
import { Details } from "@/components/settings/details"
import { LoyaltyCard } from "@/components/settings/loyalty-card"
import { Perks } from "@/components/settings/perks"
import { Social } from "@/components/settings/socials"

export default function Page() {
  const { uid } = useAuth()
  const { data, loading, error } = useFetchDocument({
    collectionRef: "merchants",
    document: uid!,
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-9">
            <div className="col-span-3">
              <Details name={data?.name} address={data?.address} />
            </div>
            <div className="col-span-3">
              <CustomerRetention
                threshold_days={data?.customer_retention?.threshold_days}
                retention_notification={
                  data?.customer_retention?.retention_notification
                }
              />
            </div>
            <div className="col-span-3">
              <Perks
                value={data?.perk?.value}
                frequency_days={data?.perk?.frequency_days}
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-9">
            <div className="col-span-3">
              <LoyaltyCard
                count={data?.loyalty_card?.count}
                reward={data?.loyalty_card?.reward}
              />
            </div>
            <div className="col-span-3">
              <Social
                instagram={data?.social?.instagram}
                twitter={data?.social?.twitter}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
