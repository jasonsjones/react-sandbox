const users = [
    {
        name: 'Admin User',
        email: 'admin@qc.com',
        avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        name: 'Oliver Queen',
        email: 'oliver@qc.com',
        avatarUrl: 'https://randomuser.me/api/portraits/men/24.jpg'
    },
    {
        name: 'John Diggle',
        email: 'dig@qc.com',
        avatarUrl: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
    {
        name: 'Jason Jones',
        email: 'jason@qc.com',
        avatarUrl: 'https://randomuser.me/api/portraits/men/21.jpg'
    }
];

export const findUser = email => {
    return users.reduce((acc, user) => {
        if (user.email === email) {
            acc = user;
        }
        return acc;
    }, users[0]);
};
