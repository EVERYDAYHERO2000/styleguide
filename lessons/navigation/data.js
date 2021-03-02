const DATA = {
  user: {
    id: 1,
  },
  companys: [
    {
      id: 1,
      name: "Hair Facker",
      logo: "/assets/logo.png",
      description: ``,
      features: [],
      services: [],
      roles: [
          {
              userId: 1,
              role: 'admin'
          },
          {
              userId: 2,
              role: 'manager'
          }
      ],
      orders: [],
      promotions: [],
      sites: [

      ],
      adresses: [
        {
          id: 1,
          address: `Москва, Полтавская ул., 6`,
        },
        {
          id: 2,
          address: `Москва, Тверская ул., 48`,
        },
        {
          id: 3,
          address: `Санкт-Петербург, Гангутская ул., 26`,
        },
      ],
      adv: [
        {
          id: 234567,
          type: 'map',
          forAdressesId: [1, 2],
        },
        {
          id: 234566,
          type: 'site',
          forAdressesId: [3],
        },
      ],
      marketing: [
          {
              id: 234565,
              forClientsTypes: [2]
          }
      ],
      clients: {
          clients: [],
          lids: [],
          types: [
              {
                  id: 1,
                  name: 'Активные'
              },
              {
                  id: 2,
                  name: 'Потерянные'
              },
              {
                  id: 3,
                  name: 'пропущенные'
              },
              {
                  id: 4,
                  name: 'Без заявок'
              },
              {
                  id: 5,
                  name: 'Постоянные'
              },
              {
                  id: 6,
                  name: 'Необработанные'
              },
              {
                  id: 7,
                  name: 'Нелояльные' 
              },
              {
                  id: 8,
                  name: 'Лояльные'
              },
              {
                  id: 9,
                  name: 'Перспективные'
              }
          ]
      }
    },
  ],
};
