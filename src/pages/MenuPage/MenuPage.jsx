import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import styles from '../MenuPage/menuPage.module.scss'
function MenuPage() {
    const [loading, setLoading] = useState(false);
    const [dataSources, setDataSources] = useState([]);

    // useEffect(() => {
    //     setLoading(true);
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setDataSource(data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }, []);

    const dataSource = [
        {
            key: '1',
            id: 1,
            title: 'Кофе "Латте"',
            category: 'Кофе',
            content: 'Кофе, молоко, ванильный сироп',
            price: 150,
            branch: 'NeoCafe Dzerzhinka',
        },
        {
            key: '2',
            id: 2,
            title: 'Чизкейк Нью-Йорк',
            category: 'Десерты',
            content: 'Сыр, сахар, мука, яйца',
            price: 200,
            branch: 'NeoCafe Gogolya',
        },
        {
            key: '3',
            id: 3,
            title: 'Пирожное Эклер',
            category: 'Выпечка',
            content: 'Сливки, мука, яйца, сахар',
            price: 120,
            branch: 'NeoCafe Pushkina',
        },
        {
            key: '4',
            id: 4,
            title: 'Чай "Английский завтрак"',
            category: 'Кофе',
            content: 'Черный чай, молоко',
            price: 100,
            branch: 'NeoCafe Tolstogo',
        },
        {
            key: '5',
            id: 5,
            title: 'Брауни',
            category: 'Десерты',
            content: 'Шоколад, масло, мука, яйца',
            price: 180,
            branch: 'NeoCafe Chekhova',
        },
        {
            key: '6',
            id: 6,
            title: 'Пирог "Яблочный"',
            category: 'Выпечка',
            content: 'Яблоки, мука, сахар, масло',
            price: 130,
            branch: 'NeoCafe Lermontova',
        },
    ];


    const columns = [
        {
            key: 'id',
            dataIndex: 'id',
            title: '№',
        },
        {
            key: 'title',
            dataIndex: 'title',
            title: 'Наименование',
        },
        {
            key: 'category',
            dataIndex: 'category',
            title: 'Категория',
            filters: [
                { text: 'Кофе', value: 'Кофе' },
                { text: 'Десерты', value: 'Десерты' },
                { text: 'Выпечка', value: 'Выпечка' },
            ],
            onFilter: (value, record) => record.category.includes(value),
        },
        {
            key: 'content',
            dataIndex: 'content',
            title: 'Состав блюда и граммовка',
        },
        {
            key: 'price',
            dataIndex: 'price',
            title: 'Стоимость',
        },
        {
            key: 'branch',
            dataIndex: 'branch',
            title: 'Филиал',
        },
    ];

    return (
        <>
            <header className={styles.table__header}>
                <Table
                    loading={loading}
                    columns={columns}
                    dataSource={dataSource}
                    className={styles.table__header}
                />
            </header>
        </>
    );
}

export default MenuPage;
