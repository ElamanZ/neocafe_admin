import React, { useEffect, useState } from 'react';
import styles from '../MenuPage/menuPage.module.scss'
import dots_icon from "../../assets/images/table/mdi_dots-vertical.svg"
function MenuPage() {

    const tableHeadDatas = [
        {
            id: 1,
            title: "Наименование"
        },
        {
            id: 2,
            title: "Категория"
        },
        {
            id: 3,
            title: "Состав блюда и граммовка"
        },
        {
            id: 4,
            title: "Стоимость"
        },
        {
            id: 5,
            title: "Филиал"
        }
    ]
    const tableBodyDatas = [
        {
            id: 1,
            name: 'Капучино',
            category: 'Кофе',
            ingredients: 'Молоко (70мл), Кофе (15 зерен)',
            price: 140,
            branch: 'NeoCafe Ala-Too Square',
        },
        {
            id: 2,
            name: 'Американо',
            category: 'Кофе',
            ingredients: 'Молоко (70мл), Кофе (15 зерен)',
            price: 180,
            branch: 'NeoCafe Ala-Too Square',
        },
        {
            id: 3,
            name: 'Латте',
            category: 'Кофе',
            ingredients: 'Молоко (100мл), Кофе (30мл)',
            price: 160,
            branch: 'NeoCafe Central',
        },
        {
            id: 4,
            name: 'Чай черный',
            category: 'Чай',
            ingredients: 'Чай (200мл), Лимон (1 долька), Сахар (по вкусу)',
            price: 120,
            branch: 'NeoCafe Bishkek Park',
        },
        {
            id: 5,
            name: 'Каппучино',
            category: 'Кофе',
            ingredients: 'Молоко (150мл), Кофе (20 гр)',
            price: 150,
            branch: 'NeoCafe Ala-Too Square',
        },
        {
            id: 6,
            name: 'Эспрессо',
            category: 'Кофе',
            ingredients: 'Кофе (30мл)',
            price: 100,
            branch: 'NeoCafe Central',
        },
    ];

    return (
        <div className={styles.tableBlock}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.table__numSymbol}>№</th>
                    {tableHeadDatas.map((tableHeadData, index) => (
                        <th key={index}>{tableHeadData.title}</th>
                    ))}
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    tableBodyDatas.map ((tableBodyData, index) => (
                        <tr key={index}>
                            <td className={styles.table__numSymbol}>№{index+1}</td>
                            <td>{tableBodyData.name}</td>
                            <td>{tableBodyData.category}</td>
                            <td>{tableBodyData.ingredients}</td>
                            <td>{tableBodyData.price}</td>
                            <td>{tableBodyData.branch}</td>
                            <td>
                                <button className={styles.table__btn}>
                                    <img src={dots_icon} alt="dots_icon"/>
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <div className={styles.tableBlock__paginationBlock}>
                <div className={styles.tableBlock__pagination}>
                    table__pagination
                </div>
            </div>
        </div>
    );
}

export default MenuPage;
