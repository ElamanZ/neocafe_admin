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

// navBar for MainPage
export const menuItems = [
  { id: "main", label: "Меню", img: menuIcon },
  { id: "warehouse", label: "Склад", img: warehouseIcon },
  { id: "branches", label: "Филиалы", img: branchesIcon },
  { id: "employees", label: "Сотрудники", img: employeesIcon },
];
