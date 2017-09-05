const details = [
  {
    carModel: 'BMW',
    detailProducer: 'REMSA',
    vendor: '1132.00',
    detailName: 'Колодки тормозные BMW E81/E87/E90 1.6-2.0 04-задние',
    detailType: 'chassis',
    detailsInfo: {
      storage: {
        amount: 1,
        price: 2750
      },
      delivery: {
        amount: 1,
        price: 2750
      },
      nonAvailable: {
        amount: 1,
        price: 2750
      }
    }
  },
  {
    carModel: 'BMW',
    detailProducer: 'Tyg',
    vendor: 'BM99002GA',
    detailName: 'ВСТАВКА ПОД НОМЕР BMW 5SERIES E34 `89-95',
    detailType: 'body-details',
    detailsInfo: {
      storage: {
        amount: 1,
        price: 2750
      },
      delivery: {
        amount: 1,
        price: 2750
      },
      nonAvailable: {
        amount: 1,
        price: 2750
      }
    }
  },
  {
    carModel: 'BMW',
    detailProducer: 'Vite',
    vendor: 'VBS1189PS',
    detailName: 'Колодки задние BMW E30/E36/E34/E32',
    detailType: 'chassis',
    detailsInfo: {
      storage: {
        amount: 1,
        price: 2750
      },
      delivery: {
        amount: 1,
        price: 2750
      },
      nonAvailable: {
        amount: 1,
        price: 2750
      }
    }
  },
  {
    carModel: 'BMW',
    detailProducer: 'HELLA',
    vendor: '1K3 134 855-011',
    detailName: 'Фара левая (оптический элемент) BMW 3 E30 HELLA 1K3134855011/63121386407',
    detailType: 'optics',
    detailsInfo: {
      storage: {
        amount: 1,
        price: 2750
      },
      delivery: {
        amount: 1,
        price: 2750
      },
      nonAvailable: {
        amount: 1,
        price: 2750
      }
    }
  },
  {
    carModel: 'Audi',
    detailProducer: 'КМК Glass/Бор',
    vendor: 'st.F.audi a6.un97',
    detailName: 'Стекло лобовое AUDI A6 универсал ALLROUD',
    detailType: 'optics',
    detailsInfo: {
      storage: {
        amount: 1,
        price: 2750
      },
      delivery: {
        amount: 1,
        price: 2750
      },
      nonAvailable: {
        amount: 1,
        price: 2750
      }
    }
  },
  {
    carModel: 'Audi',
    detailProducer: 'VAG',
    vendor: '06C905115M',
    detailName: 'Катушка системы зажигания AUDI A4 , A6 , A8',
    detailType: 'body-details',
    detailsInfo: {
      storage: {
        amount: 1,
        price: 2750
      },
      delivery: {
        amount: 0,
        price: 2750
      },
      nonAvailable: {
        amount: 10,
        price: 2750
      }
    }
  },
  {
    carModel: 'Audi',
    detailProducer: 'BOSCH',
    vendor: '1305620524',
    detailName: 'Стекло фары левое AUDI 100 (44) до 91 г.в. 443941115F',
    detailType: 'optics',
    detailsInfo: {
      storage: {
        amount: 1,
        price: 10050
      },
      delivery: {
        amount: 0,
        price: 2750
      },
      nonAvailable: {
        amount: 0,
        price: 2750
      }
    }
  },
  {
    carModel: 'Jeep',
    detailProducer: 'Vite',
    vendor: 'VBS4126PS',
    detailName: 'Колодки передние Chrysler Voyager 00>/Jeep Grand Cherokee 01>/Liberty 02>',
    detailType: 'body-details',
    detailsInfo: {
      storage: {
        amount: 10,
        price: 10050
      },
      delivery: {
        amount: 2,
        price: 2750
      },
      nonAvailable: {
        amount: 0,
        price: 2750
      }
    }
  },
  {
    carModel: 'Lexus',
    detailProducer: 'AMC',
    vendor: 'VBS4126PS',
    detailName: 'Фильтр воздушный LEXUS LS 430',
    detailType: 'body-details',
    detailsInfo: {
      storage: {
        amount: 1,
        price: 19050
      },
      delivery: {
        amount: 4,
        price: 20750
      },
      nonAvailable: {
        amount: 0,
        price: 2750
      }
    }
  },
  {
    carModel: 'Skoda',
    detailProducer: 'VAG',
    vendor: '1U6959621B01C',
    detailName: 'Кнопка обогрева заднего стекла skoda octavia',
    detailType: 'body-details',
    detailsInfo: {
      storage: {
        amount: 3,
        price: 13050
      },
      delivery: {
        amount: 2,
        price: 10750
      },
      nonAvailable: {
        amount: 6,
        price: 20750
      }
    }
  },
  {
    carModel: 'Suzuki',
    detailProducer: 'DAYCO',
    vendor: '94923',
    detailName: 'Ремень ГРМ CITROEN , FIAT , FORD , LANCIA , MAZDA , PEUGEOT , SUZUKI , TOYOTA',
    detailType: 'body-details',
    detailsInfo: {
      storage: {
        amount: 1,
        price: 13050
      },
      delivery: {
        amount: 3,
        price: 10750
      },
      nonAvailable: {
        amount: 6,
        price: 20750
      }
    }
  }
]
export const find = (filters, values) => details.filter((elem) => {
  // eslint-disable-next-line
  //   for (let key in elem) {
  //     if (value.some(el => el === elem[key])) {
  //       return elem
  //     }
  //   }
  // return false
  const res = filters.every(fe => values.some(ve => elem[fe] === ve))
  console.log('res', res)
  return res
  // eslint-disable-next-line
  // if (values.some(el => el === elem[filters])) {
  //   return elem[filters]
  // }
  // return false
})

export default details
