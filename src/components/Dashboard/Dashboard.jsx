import React from 'react';

const Dashboard = () => {
    // Данные авторизованного пользователя
    const user = {
        id: 1,
        username: 'example_user',
        email: 'example@example.com',
        role: 'admin',
    };

    return (
        <div>
            <h2>Панель управления</h2>
            <div>
                <p><strong>Имя пользователя:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Роль:</strong> {user.role}</p>
            </div>
        </div>
    );
};

export default Dashboard;
