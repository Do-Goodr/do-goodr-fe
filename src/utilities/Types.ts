export interface EventContainerProps {
    events: Event[]
}


export interface OppProps {
    key: number
    event: Event  
  }


export interface Event {
  address: string
  category: string
  description: string
  event_name: string
  organization_id: number
  date: string
  start_time: string
  end_time: string
  vols_required: number
  id?: number 
}  

export interface ZipCodeSearch  {
  zipCode: string
  mileage: number
}

export interface CreatedEvent {
  id: number
  event_name: string
  date: string
  category: string
  start_time: string
  end_time: string
  vols_required: number
  description: string
  address: string
}

export interface OrgDetails {
  
  id?: number
  name: string
  address: string
  phone: string
  email: string
  confirmation?: string
}

export interface Error {
  error: string
}
