import { pb } from "./pocketbase"

export interface OwnwerSearchResponse {
  page: number
  perPage: number
  totalPages: number
  totalItems: number
  items: OwnerResponse[]
}

export interface OwnerResponse {
  id: string
  collectionId: string
  collectionName: string
  label:string;
  option:string;
  created: string
  updated: string
  name: string
  email: string
  phone: string
  location: string
  image: string
  whatsapp: string
}



export async function getOwner(keyword:string) {
    try {
        const record = await pb.collection('owner').getFirstListItem(`name~"${keyword}"`, { })
        console.log("record", record)
        if(record.code === 400){
            throw new Error("failed to search for owner",record.message)
        }
        record['value']=record.id
        record['label']=record.name
        // @ts-expect-error
        const ownerArr = new Array<OwnerResponse>(record)
        return  ownerArr

    } catch (error) {
        throw error
    }
}

