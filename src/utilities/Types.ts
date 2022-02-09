
export interface HeaderProps {
    
}


export interface SignInProps {
    
}


export interface EventContainerProps {
    
}


export interface OppProps {
    key: number
    event: Event  
  }


export interface Event {
  address: string
  category: string
  description: string
  duration: number
  name: string
  organization_id: number
  start_time: string
  vols_required: number
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