import commentModel from './api/comments/commentModel';

const comments = [{
        'name': 'Person 1',
        'content': 'Something being said by p1'
    },
    {
        'name': 'Person 2',
        'content': 'Something being said by p2'
    },
    {
        'name': 'Person 3',
        'content': 'Something being said by p3'
    },
    {
        'name': 'Person 4',
        'content': 'Something being said by p4'
    },
    {
        'name': 'Person 5',
        'content': 'Something being said by p5'
    },
];

export default async function loadContacts() {
    try {
        await commentModel.deleteMany();
        await commentModel.collection.insertMany(comments);
        console.info(`${comments.length} comments were successfully stored.`);
    } catch (err) {
        console.error(`failed to Load Comment Data: ${err}`);
    }
}