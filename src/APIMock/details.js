const details = [
  {
    carModel: 'BMW',
    detailProducer: 'VAG',
    vendor: '1k2945511',
    detailName: 'Стекло лобовое AUDI A6 универсал ALLROUD',
    detailType: 'optics',
    avialability: {
      storage: 1,
      delivery: 3
    },
    price: {
      storagePrice: 2750,
      deliveryPrice: 3000
    }
  },
  {
    carModel: 'Renault',
    detailProducer: 'VAG',
    vendor: '1k2945511',
    detailName: 'Стекло лобовое AUDI A6 универсал ALLROUD',
    detailType: 'optics',
    avialability: {
      storage: 1,
      delivery: 3
    },
    price: {
      storagePrice: 2750,
      deliveryPrice: 3000
    }
  },
  {
    carModel: 'Kek',
    detailProducer: 'VAG',
    vendor: '1k2945511',
    detailName: 'Стекло лобовое AUDI A6 универсал ALLROUD',
    detailType: 'optics',
    avialability: {
      storage: 1,
      delivery: 3
    },
    price: {
      storagePrice: 2750,
      deliveryPrice: 3000
    }
  }
]
export const find = (option, value) => {
  console.log(option, details[0].carModel)
  return details.filter((elem) => {
  // eslint-disable-next-line
    for (let key in elem) {
      if (elem[key] === value) {
        console.log(elem)
        return elem
      }
    }
    return false
  })
}
export default details
