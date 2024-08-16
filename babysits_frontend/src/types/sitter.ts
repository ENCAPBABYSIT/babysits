export interface Sitter {
    id: number,
    name: string,
    lastName: string,
    email: string,
    password: string,
    age: number,
    department: string,
    fee: number,
    score: number,
    description:string,
    calendar: {
      mon: {
        early: boolean
        noon: boolean
        late: boolean
      },
      tue: {
        early: boolean
        noon: boolean
        late: boolean
      },
      wed: {
        early: boolean
        noon: boolean
        late: boolean
      },
      thu: {
        early: boolean
        noon: boolean
        late: boolean
      },
      fri: {
        early: boolean
        noon: boolean
        late: boolean
      },
      sat: {
        early: boolean
        noon: boolean
        late: boolean
      },
      sun: {
        early: boolean
        noon: boolean
        late: boolean
      }
    }
  }