export class Customer {
  id: number;
  amount:number;
  imageSrc: string;
  firstName: string;
  lastName: string;
  street: string;
  zipcode: number;
  currency:string;
  city: string;
  phoneNumber: string;
  date:Date;
  mail: string;
  labels: any;

  constructor(customer) {
    this.id = customer.id;
    this.amount = customer.amount;
    this.imageSrc = customer.imageSrc;
    this.firstName = customer.firstName;
    this.lastName = customer.lastName;
    this.street = customer.street;
    this.zipcode = customer.zipcode;
    this.city = customer.city;
    this.phoneNumber = customer.phoneNumber;
    this.mail = customer.mail;
    this.currency =customer.currency;
    this.labels = customer.labels;
    this.date = customer.date
  }

  get name() {
    let name = '';

    if (this.firstName && this.lastName) {
      name = this.firstName + ' ' + this.lastName;
    } else if (this.firstName) {
      name = this.firstName;
    } else if (this.lastName) {
      name = this.lastName;
    }

    return name;
  }

  set name(value) {
  }

  get address() {
    return `${this.street}, ${this.zipcode} ${this.city}`;
  }

  set address(value) {
  }
}
