const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Програмування для всіх',
      description:
        'Кожний може вивчити код! Так, кожний! Ця подія допоможе тобі пройти скрізь основи програмування, та почати писати код.',
      location: 'Шевченка 25, 12345 Київ',
      date: '2021-05-12',
      image: 'images/fotis-fotopoulos.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Мережа для інтровертів',
      description:
        "Ми знаємо: Сидіти у мережі це не прикольно, якщо ви інтроверт. Тому ця подія стала можливою  - тобі стане набагато легше. Обіцяємо!",
      location: 'Степана Бендери 5, 98765 Львів',
      date: '2021-05-30',
      image: 'images/markus-spiske-hvSr_CVecVI-unsplash.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Програмування у великих',
      description:
        'Можливо щось постійно відводить тебе від програмування. Але якщо сфокусуватия правильно - це дуже допомагає більшості людей.',
      location: 'Лесі Українки 12, 10115 Іршанськ',
      date: '2022-04-10',
      image: 'images/max-duzij-qAjJk-un3BI-unsplash.jpg',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }