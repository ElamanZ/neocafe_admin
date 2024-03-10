// TableDatas
import menuIcon from "../images/appSlider/mdi_menu.svg";
import warehouseIcon from "../images/appSlider/mdi_warehouse.svg";
import branchesIcon from "../images/appSlider/mdi_branches.svg";
import employeesIcon from "../images/appSlider/mdi_employees.svg";

export const MenuHeadDatas = [
  {
    id: 1,
    title: "Наименование",
  },
  {
    id: 2,
    title: "Категория",
  },
  {
    id: 3,
    title: "Состав блюда и граммовка",
  },
  {
    id: 4,
    title: "Стоимость",
  },
  //   {
  //     id: 5,
  //     title: "Филиал",
  //   },
];
export const tableBodyDatas = [
  {
    id: 1,
    name: "Капучино",
    category: "Кофе",
    ingredients: "Молоко (70мл), Кофе (15 зерен)",
    price: 140,
    // branch: 'NeoCafe Ala-Too Square',
  },
  {
    id: 2,
    name: "Американо",
    category: "Кофе",
    ingredients: "Молоко (70мл), Кофе (15 зерен)",
    price: 180,
    // branch: 'NeoCafe Ala-Too Square',
  },
  {
    id: 3,
    name: "Латте",
    category: "Кофе",
    ingredients: "Молоко (100мл), Кофе (30мл)",
    price: 160,
    // branch: 'NeoCafe Central',
  },
  {
    id: 4,
    name: "Чай черный",
    category: "Чай",
    ingredients: "Чай (200мл), Лимон (1 долька), Сахар (по вкусу)",
    price: 120,
    // branch: 'NeoCafe Bishkek Park',
  },
  {
    id: 5,
    name: "Каппучино",
    category: "Кофе",
    ingredients: "Молоко (150мл), Кофе (20 гр)",
    price: 150,
    // branch: 'NeoCafe Ala-Too Square',
  },
  {
    id: 6,
    name: "Эспрессо",
    category: "Кофе",
    ingredients: "Кофе (30мл)",
    price: 100,
    // branch: 'NeoCafe Central',
  },
  {
    id: 7,
    name: "КофеМол",
    category: "Напитки",
    ingredients: "Кофе (30мл), Молоко (100мл), Шоколад (10г)",
    price: 220,
    // branch: "Neo Center"
  },
  {
    id: 8,
    name: "ФлэтУайт",
    category: "Кофе",
    ingredients: "Эспрессо (30мл), Молоко (100мл)",
    price: 200,
    // branch: "Neo Center"
  },
  {
    id: 9,
    name: "КарамМак",
    category: "Кофе",
    ingredients: "Эспрессо (30мл), Молоко (50мл), Карамельный сироп (20мл)",
    price: 180,
    // branch: "Neo Center"
  },
  {
    id: 10,
    name: "Мятный чай",
    category: "Чай",
    ingredients: "Чай (200мл), Мята (5г), Лимон (1 долька), Сахар (по вкусу)",
    price: 130,
    // branch: "Neo Ololo"
  },
  {
    id: 11,
    name: "Смузи",
    category: "Напитки",
    ingredients:
      "Банан (1 шт), Ягоды (100г), Апельсиновый сок (150мл), Мед (по вкусу)",
    price: 250,
    // branch: "Neo Alamedin"
  },
];

export const branchData = [
  {
    id: 1,
    name: "NeoCafe Dzerzhinka",
    address: "бульвар Эркиндик, 35",
    schedule: "Каждый день с 11:00 до 22:00",
  },
  {
    id: 2,
    name: "NeoCafe Karpinka",
    address: "ул. Суюмбаева, 83",
    schedule: "Пн-Пт с 11:00 до 22:00, Сб-Вс Выходной",
  },
  {
    id: 3,
    name: "NeoCafe Dzerzhinka",
    address: "бульвар Эркиндик, 35",
    schedule: "Каждый день с 11:00 до 22:00",
  },
  {
    id: 4,
    name: "NeoCafe Karpinka",
    address: "ул. Суюмбаева, 83",
    schedule: "Пн-Пт с 11:00 до 22:00, Сб-Вс Выходной",
  },
  {
    id: 5,
    name: "NeoCafe Dzerzhinka",
    address: "бульвар Эркиндик, 35",
    schedule: "Каждый день с 11:00 до 22:00",
  },
  {
    id: 6,
    name: "NeoCafe Dzerzhinka",
    address: "бульвар Эркиндик, 35",
    schedule: "Каждый день с 11:00 до 22:00",
  },
  {
    id: 7,
    name: "NeoCafe Karpinka",
    address: "ул. Суюмбаева, 83",
    schedule: "Пн-Пт с 11:00 до 22:00, Сб-Вс Выходной",
  },
  {
    id: 8,
    name: "NeoCafe Karpinka",
    address: "ул. Суюмбаева, 83",
    schedule: "Пн-Пт с 11:00 до 22:00, Сб-Вс Выходной",
  },
  {
    id: 9,
    name: "NeoCafe Karpinka",
    address: "ул. Суюмбаева, 83",
    schedule: "Пн-Пт с 11:00 до 22:00, Сб-Вс Выходной",
  },
  {
    id: 10,
    name: "NeoCafe Dzerzhinka",
    address: "бульвар Эркиндик, 35",
    schedule: "Каждый день с 11:00 до 22:00",
  },
];

export const warehouseData = [
  {
    id: 1,
    name: "Капучино",
    quantity: 20,
    limit: 10,
    arrival_date: "20.09.2024",
    branch: "NeoCafe Ala-Too Square",
  },
  {
    id: 2,
    name: "Эспрессо",
    quantity: 15,
    limit: 8,
    arrival_date: "18.09.2024",
    branch: "NeoCafe Bishkek Park",
  },
  {
    id: 3,
    name: "Латте",
    quantity: 25,
    limit: 12,
    arrival_date: "22.09.2024",
    branch: "NeoCafe Tokmok",
  },
  {
    id: 4,
    name: "Американо",
    quantity: 18,
    limit: 9,
    arrival_date: "21.09.2024",
    branch: "NeoCafe Osh",
  },
  {
    id: 5,
    name: "Мокка",
    quantity: 22,
    limit: 11,
    arrival_date: "19.09.2024",
    branch: "NeoCafe Jalal-Abad",
  },
  {
    id: 6,
    name: "Флэт Уайт",
    quantity: 12,
    limit: 6,
    arrival_date: "23.09.2024",
    branch: "NeoCafe Cholpon-Ata",
  },
  {
    id: 7,
    name: "Раф",
    quantity: 30,
    limit: 15,
    arrival_date: "24.09.2024",
    branch: "NeoCafe Kara-Balta",
  },
  {
    id: 8,
    name: "Какао",
    quantity: 28,
    limit: 14,
    arrival_date: "25.09.2024",
    branch: "NeoCafe Naryn",
  },
  {
    id: 9,
    name: "Чай",
    quantity: 35,
    limit: 18,
    arrival_date: "26.09.2024",
    branch: "NeoCafe Batken",
  },
  {
    id: 10,
    name: "Горячий шоколад",
    quantity: 17,
    limit: 8,
    arrival_date: "27.09.2024",
    branch: "NeoCafe Talas",
  },
];

export const warehouseRawData = [
  {
    id: 1,
    name: "Мука",
    quantity: 20,
    limit: 10,
    arrival_date: "20.09.2024",
    branch: "NeoCafe Ala-Too Square",
  },
  {
    id: 2,
    name: "Растительное масло",
    quantity: 20,
    limit: 10,
    arrival_date: "20.09.2024",
    branch: "NeoCafe Ala-Too Square",
  },
  {
    id: 3,
    name: "Какао",
    quantity: 20,
    limit: 10,
    arrival_date: "20.09.2024",
    branch: "NeoCafe Ala-Too Square",
  },
];

export const staffData = [
  {
    id: 1,
    name: "Алихандро",
    role: "Бармен",
    branchId: "NeoCafe Dzerzhinka",
    phone: "99677777777",
    workSchedule: "Пн, Вт, Чт, Пт",
  },
  {
    id: 2,
    name: "Алихандро",
    role: "Официант",
    branchId: "NeoCafe Dzerzhinka",
    phone: "99677777777",
    workSchedule: "Пн, Вт, Чт, Пт",
  },
];

// navBar for MainPage
export const menuItems = [
  { id: "main", label: "Меню", img: menuIcon },
  { id: "warehouse", label: "Склад", img: warehouseIcon },
  { id: "branches", label: "Филиалы", img: branchesIcon },
  { id: "employees", label: "Сотрудники", img: employeesIcon },
];
