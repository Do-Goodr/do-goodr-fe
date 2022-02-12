
export interface HeaderProps {
    
}


export interface SignInProps {
    
}


export interface EventContainerProps {
    events: Event[]
    filteredEvents?: Event[]
}


export interface OppProps {
    key: number
    event: Event  
  }


export interface Event {
  address: string
  category: string
  description: string
  name: string
  organization_id: number
  date: string
  start_time: string
  end_time: string
  vols_required: number
  id: number
}  

export interface ZipCodeSearch  {
  zipCode: number
  mileage: number
}

export interface CreatedEvent {
  id: number
  date: string
  category: string
  start_time: string
  end_time: string
  vols_required: number
  description: string
}

export interface CreateOrgDetails {
  name: string
  address: string
  phone: string
  email: string
  confirmation: string
}